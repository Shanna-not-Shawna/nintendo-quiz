// user experience:
// User clicks Start to start quiz, (choose an answer, see feedback, go to next question) * 5, when all questions are answered OR time is up, the Game Over screen will appear and user will be asked to enter initials for the high score page. User then has the option to go back to start or erase high scores. 
var startSection = document.getElementById("starter");
var questionContainer = document.getElementById("questionSection");
var formSection = document.getElementById("form");
var scoreBoard = document.getElementById("highscore");
var startButton = document.getElementById("start-btn");
var highScoreButton = document.getElementById("high-scores");
var countdownText = document.getElementById("countdown-text");
var question = document.createElement("h2");
var feedbackText = document.getElementById("feedback");
var submitButton = document.getElementById("submit-btn");
var timeLeft = 80;
var timeInterval;
var incorrectPenalty = 10;
var createElP = document.createElement("p")

// function startQuiz - hides start section, unhides question section which populates with 1st Q, starts timer
startButton.addEventListener('click', startQuiz);


function startQuiz() {
    //hide start section
    startSection.classList.add('hide');
    //start timer
    countdown();
    //show question container
    questionContainer.classList.remove('hide');
    formSection.classList.add('hide');
    // scoreBoard.classList.add('hide');
    //show the 1st question
    displayQuestion();
}


// add more time 
function countdown() {
    timeInterval = setInterval(function () {

        if (timeLeft > 1) {
            countdownText.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else {
            
            
            endQuiz();
        }
    }, 1000);
}

// function selectAnswer use event.target buttons
// form element wrapping an input for high score submit

var questionIndex = 0;
var myQuestions = [{
    questionText: "When Nintendo was founded in 1889, what product did they manufacture?",
    choices: ["Board Games", "Playing Cards", "Electric Circuits", "Manga"],
    correctAnswer: "Playing Cards"
}, {
    questionText: "What was the name of Nintendo's first home console?",
    choices: ["Color TV-Game", "Nintendo Entertainment System (NES)", "Game & Watch", "Nintendo '85"],
    correctAnswer: "Color TV-Game"
}, {
    questionText: "Which Nintendo system is known for being Nintendo's biggest flop?",
    choices: ["Wii U", "Nintendo GameCube", "Virtual Boy", "Game Boy Advance"],
    correctAnswer: "Virtual Boy"
}, {
    questionText: "Which Nintendo game was the first to have a 'save game' feature?",
    choices: ["Metroid", "Dragon Warrior", "Final Fantasy", "The Legend of Zelda"],
    correctAnswer: "The Legend of Zelda"
}, {
    questionText: "Which Nintendo Switch game has sold the most copies?",
    choices: ["Animal Crossing: New Horizons", "Super Smash Bros. Ultimate", "Mario Kart 8 Deluxe", "The Legend of Zelda: Breath of the Wild"],
    correctAnswer: "Mario Kart 8 Deluxe"
}]

function displayQuestion() {
    questionContainer.innerHTML = "";
    feedbackText.textContent = "";
    var currentQuestion = myQuestions[questionIndex];
    question.textContent = currentQuestion.questionText;
    questionContainer.append(question)

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choiceText = currentQuestion.choices[i];
        var choiceButton = document.createElement("button");
        choiceButton.classList.add("answer-btn");
        choiceButton.dataset.correct = choiceText === currentQuestion.correctAnswer;
        choiceButton.textContent = choiceText
        questionContainer.append(choiceButton)
    }
}

function endQuiz(){
    countdownText.textContent = '';
    feedbackText.textContent = "";
    //show the form
    formSection.classList.remove('hide');
    //hide the quiz section
    questionContainer.classList.add('hide');
    // questionContainer.classList.remove('hide');
    //freeze clock and store the time left on timer to be used for scoreboard
    // Use `clearInterval()` to stop the timer
    clearInterval(timeInterval);
}

function checkAnswer(isCorrect) {
    console.log(isCorrect);
    displayResult(isCorrect);
    setTimeout(function () {
        questionIndex++;
        // if there are more questions call display question
        if (questionIndex < myQuestions.length) {
            displayQuestion();
        // if not call end quiz
        } else {
            endQuiz();
        }
    }, 1000);
}

function displayResult(isCorrect) {
    feedbackText.textContent = isCorrect ? "Correct!" : "Incorrect! -10 Seconds";
    if (!isCorrect) {
       timeLeft = Math.max(0, timeLeft - incorrectPenalty);
    }
}


submitButton.addEventListener("click", saveScore);


//this function is called whenever the button on the form is clicked
function saveScore(){
    //save initials and score to local storage. Key initials, user entered string; key score, time remaining on timer.
    var initials = document.getElementById("myText").value;

    if (!initials) return;

    var topScores = JSON.parse(localStorage.getItem("topScores")) || [];

    topScores.push({initials, timeLeft});

    localStorage.setItem("topScores", JSON.stringify(topScores));

    showScores();

}

// get object array from local storage, parse it, have an unordered list populated with a list item for each entry
function showScores(){
    var scoresHTML = "";

    var topScores = JSON.parse(localStorage.getItem("topScores")) || [];
    var scoresContainer = document.getElementById("scoresContainer");

    for (const score of topScores) {
        scoresHTML += `
        <ul>
        <li>${score.initials} .................... ${score.timeLeft}</li>
        </ul>
        `
    }
    scoresContainer.innerHTML = scoresHTML;
    formSection.classList.add('hide');
    scoreBoard.classList.remove('hide');
    questionContainer.classList.add('hide');
    startSection.classList.add('hide');

}

highScoreButton.addEventListener('click', showScores);

document.addEventListener("click", function(event){
    if(event.target.className !== "answer-btn") return;

    checkAnswer(event.target.dataset.correct === "true");
})