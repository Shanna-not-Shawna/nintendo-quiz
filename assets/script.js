// user experience:
// User clicks Start to start quiz, (choose an answer, see feedback, go to next question) X5, when all questions are answered OR time is up, user will be at the Game Over screen and asked to enter initials for the high score page. User then has the option to go back to start or erase high scores. 


// function startQuiz - hides start section, unhides 1st question section, starts timer
var startSection = document.getElementById("starter");
var questionSection = document.getElementById("questions");
var formSection = document.getElementById("form");
var scoreBoard = document.getElementById("highscore");


function StartQuiz() {
    startScreen.style.display="none";
}

// function setNextQuestion 

// function selectAnswer 


questions = [{
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

// myQuestions[0].questionText
// myQuestions[0].choices[1]
// myQuestions[0].correctAnswer

// on click, move forward in Array

// on click
// myQuestions[1].questionText
// myQuestions[1].choices[1]
// myQuestions[1].correctAnswer


