// elements created and querys








// let pEl = document.createElement("p");
// pEl.setAttribute("id", "pEl")
// questionDiv.appendChild(pEl);

// let h1 = document.createElement("h1");
// h1.setAttribute("id", "createH1");
// body.appendChild(h1);





// let submitEl = document.createElement("button");
// submitEl.setAttribute("id", "text");
// submitEl.setAttribute("id", "Submit");
// submitEl.textContent = "Autograph";
// questionDiv.appendChild(submitEl);




// start of with arrays  and objects for questions and answers

let questions = [ {

    title: "Which has the longest season out of all the profesional sports:  ",
    choices: ["Major League Baseball", "National Football League", "National Hockey League", "National Basketball Association"],
    answer: "Major League Baseball"
},

{
    title: "Which teams played in the first ever SuperBowl and what year:",
    choices: ["Kansas City Chiefs vs Green Bay Packers-1959", "Dallas Cowboys vs Buffalo Bills-1994", "Kansas City Chiefs vs Green Bay Packers-1967", "New York Jets vs Baltimore Colts-1969"],
    answer: "Kansas City Chiefs vs Green Bay Packers-1967"
},

{
    title: "This combinations of a pitcher and a catcher will have played in the most combined no-hitter games:",
    choices: ["Clayton Kershaw and Ivan Rodriguiz", "Nolan Ryan and Jason Veritek", "Roy Haliday and Yadier Molina", "Jason Verlander and Yogi Beara"],
    answer: "Nolan Ryan (7) and Jason Veritek (8)"
},

{
    title: "Were did the Dallas Stars move from in 1993:",
    choices: ["California", "Washington", "Vancouver", "Minnesota"],
    answer: "Minnesota"
},

{
    title: "Which team has won the most Super Bowls:",
    choices: ["San Fransico 49ers", "New England Patriots", "Dallas Cowboys", "Las Vegas Raiders"],
    answer: "New England Patriots"

},

{
     title: "Out of all the profesional sports leauges what is the oldest staduim used:",
     choices: ["Lambeau Field", "Wrigley Field", "Fenway Park", "Gillette Stadium"],
     answer: "Fenway Park April 9, 1912"
},

{ 
    title: "Who holds the rushing title for a single season and what year did he achieve it:",
    choices: ["Barry Sanders, 1997", "Eric Dickerson, 1984", "Emmitt Smith, 1995", "Adrian Petterson, 2010"],
    answer: "Eric Dickerson, 1984"

},

{
    title: "How many game winning field goals, made in the last minute of the game does Adam Vinatieri have:",
    choices: ["17", "27", "20", "5"],
    answer: "20"
},

];

let wrapper = document.querySelector("#wrapper");
let currentTime = document.querySelector("#currentTime")
let timeEl = document.querySelector("time")
let questionDiv = document.querySelector("#questionDiv");
let timer = document.querySelector("#startTime");

let ulEl = document.createElement("ul");

// Variables Needed 

let score = 0;
let questionIndex = 0;

// time variables
let timeLeft = 80;
let timerInterval = 0;
let wrongPenalty = 10;
let secondsElapsed = 0;

let ulCreate = document.createElement("ul");



timer.addEventListener("click", function () {
 
        if (timerInterval === 0) {
            let timerInterval = setInterval(function(){
                timeLeft--;
                currentTime.textContent = "Time: " + timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                currentTime.textContent = "Out of Time"

                
        
                }
            }, 1000);

         }
         render(questionIndex);
        }); 
        
            function render(questionIndex) {

        questionDiv.innerHTML = "";
        ulCreate.innerHTML = "";
    
        for (let i = 0; i < questions.length; i++) {
            
            let userQuestion = questions[questionIndex].title;
            let userChoices = questions[questionIndex].choices;
            questionDiv.textContent = userQuestion; 
        }  
    
        userChoices.forEach(function (newItem) {
    
            let liEl = document.createElement("li");
            liEl.textContent = newItem;
            questionDiv.appendChild(ulCreate);
            ulCreate.appendChild(liEl);
            liEl.addEventListener("click", (compare));
        
        })
    }

    function compare(event) {
        let element = event.target;
    
        if (element.matches("li")) {
    
            let answerDiv = document.createElement("div");
            answerDiv.setAttribute("id", "answerDiv");
            
            if (element.textContent == questions[questionIndex].answer) {
                score++;
                answerDiv.textContent = "Goal!  " + questions[questionIndex].answer + ", is thecorrect answer!";
                
            } else {
                
                timeLeft = timeLeft - wrongPenalty;
                answerDiv.textContent = "Flag on the play: " + questions[questionIndex].answer + ", is in correct, 10 second run off!";
            }
    
        }
        
        questionIndex++;
    
        if (questionIndex >= questions.length) {
            
            allFinished();
            answerDiv.textContent = "Game Over!" + " " + "Your score is  " + score + "/" + questions.length + " Correct!";
        } else {
            render(questionIndex);
        }
        questionsDiv.appendChild(answerDiv);
    
    }
    