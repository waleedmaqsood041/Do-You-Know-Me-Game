var readlineSync = require("readline-sync");
var score = 0;

console.log("\t\t\t\t\t------------------- ");
console.log("\t\t\t\t\tDO YOU KNOW ME GAME");
console.log("\t\t\t\t\t-------------------\n ");  

var user = readlineSync.question("What's your name : ");
console.log("\nHey!", user,"\n\n\t\t\t\t\tWelcome! to the \"Game\"\n\nYou will be asked some questions if you answer them correclty your score will increase, otherwise it will decrease\n ")

function play(question,answer){
  
  var userAnswer = readlineSync.question(question);
  
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You are right!");
    score = score + 1;
  } else{
    console.log("You are wrong!");
    score = score - 1;
  }
    console.log("Your Score is:",score)
    console.log("-------------")
}

// Array of Objects
var questions = [{
  question: "Q1. What's my Name? ",
  answer: "waleed",
},
{
  question: "Q2. Am I greater than 25 year old? (yes or no) ",
  answer: "no",
},                 
{
  question: "Q3. Where Do I live? ",
  answer: "lahore",
},
{
  question: "Q4. What I love to do in my free time? (Social media, Gaming, Movies, Study) ",
  answer:"movies"
},{
  question: "Q5. What's my favorite superhero (Thor,Ironman,Spiderman,Hulk) ",
  answer:"spiderman"
}];

// for loop
for(i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
var highScores = [  
  {
    name: "waleed:",
    score: "5",
  },
  {
    name: "bot:",
    score: "5",
  }];


if(score===5){
  console.log("Hurray!, You have answered all questions correctly Congratulations!,You Know me very well");
  console.log("\nHigh Scores are: ")
  for(i=0; i<highScores.length; i++){
  var currentScore = highScores[i];
  console.log(currentScore.name, currentScore.score)
  }
  console.log("You:",score)
}else{
  console.log("Your score is:",score)
}
