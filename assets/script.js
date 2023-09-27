// user experience:
// User clicks Start to start quiz, (choose an answer, see feedback, go to next question) X5, when all questions are answered OR time is up, user will be at the Game Over screen and asked to enter initials for the high score page. User then has the option to go back to start or erase high scores. 



var startSection = document.getElementById("starter");
var questionContainer = document.getElementById("questionSection");
var formSection = document.getElementById("form");
var scoreBoard = document.getElementById("highscore");





// add event listener to listen for click on target 
// startButton.addEventListener("click");

function countdown() {
    var timeLeft = 10;
  
    var timeInterval = setInterval(function () {
    
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        endQuiz();
      }
    }, 1000);
  }


// function startQuiz - hides start section, unhides 1st question section, starts timer
function StartQuiz() {
    startSection.style.display="none";
    questionSection.style.display="block";
}

// function startTimer 
// function setNextQuestion 
// function selectAnswer
// form element wrapping an input for high score submit
// function endQuiz


myQuestions = [{
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

// function displayQuestion () {
//     var question = document.createElement("h2")
//     question.textContent = myQuestions[currentQuestion].questionText
//     questionsEl.append (questionText)

// for (var i=0; 1 < myQuestions[currentQuestion].choices.length; i++)
// var choiceButton = document.createElement("button")
// choiceButton.textContent = myQuestions[currentQuestion].choices[i]
// questionsEl.append (choiceButton)
// }

function showCurrentQuestion() {
    var currentQuestion = myQuestions[questionIndex];
    var title = document.getElementById("question-text");
    title.textContent = currentQuestion.questionText;
    for (let i = 0; i < currentQuestion.questionChoices.length; i++) {
        var choice = currentQuestion.questionChoices[i];
        var li = document.getElementById(`answer-${i}`);
        li.textContent = choice
        li.dataset.correct = i === currentQuestion.correctAnswer;
    }
}
// myQuestions[0].questionText
// myQuestions[0].choices[1]
// myQuestions[0].correctAnswer

// on click, move forward in Array

// on click
// myQuestions[1].questionText
// myQuestions[1].choices[1]
// myQuestions[1].correctAnswer


