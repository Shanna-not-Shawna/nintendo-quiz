// user experience:
// User clicks Start to start quiz, (choose an answer, see feedback, go to next question) X5, when all questions are answered OR time is up, user will be at the Game Over screen and asked to enter initials for the high score page. User then has the option to go back to start or erase high scores. 



var startSection = document.getElementById("starter");
var questionContainer = document.getElementById("questionSection");
var formSection = document.getElementById("form");
var scoreBoard = document.getElementById("highscore");
var startButton = document.getElementById("start-btn");
var countdownText = document.getElementById("countdown-text");




// add event listener to listen for click on target 
// startButton.addEventListener("click");


// function startQuiz - hides start section, unhides question section which populates with 1st Q, starts timer
startButton.addEventListener('click', startQuiz);

function startQuiz() {
    //hide start section
    startSection.classList.add('hide');
    //start timer
    countdown();
    //show question container
    questionContainer.classList.remove('hide');
    //show the 1st question
    displayQuestion();
}


// add more time 
function countdown() {
    var timeLeft = 10;

    var timeInterval = setInterval(function () {

        if (timeLeft > 1) {
            countdownText.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else {
            countdownText.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // endQuiz();
        }
    }, 1000);
}

// function startTimer 
// function setNextQuestion 
// function selectAnswer use event.target buttons
// form element wrapping an input for high score submit
// function endQuiz

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

    var currentQuestion = myQuestions[questionIndex];
    var question = document.createElement("h2");

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

function checkAnswer(isCorrect) {
    console.log(isCorrect)
    // increment score 

    //display if correct

    //increment questionIndex

    //if there are more questions call display question

    //if not call end quiz
}

function endQuiz(){
    //show the form

    //hide the quiz section

    //do things with timer
}

//this function is called whenever the button on the form is clicked
function saveScore(){
    //save initals and score to local storage
}

document.addEventListener("click", function(event){
    if(event.target.className !== "answer-btn") return;

    checkAnswer(event.target.dataset.correct);
})
// myQuestions[0].questionText
// myQuestions[0].choices[1]
// myQuestions[0].correctAnswer

// on click, move forward in Array

// on click
// myQuestions[1].questionText
// myQuestions[1].choices[1]
// myQuestions[1].correctAnswer


//form button - local storage