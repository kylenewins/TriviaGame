$(document).ready(function(){
//global variables
var correct = 0;
var incorrect = 0;
var number = 10;
var timerInt;

var labels = ["first", "second", "third", "forth", "fifth"];

//gamestart function
var gameStart = function(){
    correct=0;
    incorrect=0;
    number = 10;

    clearInterval(timerInt);
    $("#timer").empty();

    $("#start-box").show();
    $("#quiz-box").hide();
    $("#end-box").hide();
}

//show the quiz page and starts the timer on start button click
$("#start-button").on("click", function(){
    $("#start-box").hide();
    $("#quiz-box").show();
    run();
})

//function to display the questions

//interval timer at the top of quiz page
function run() {
    clearInterval(timerInt);
    timerInt = setInterval(decrease, 1000);
  }
 
  function decrease() {  //function that is run in the setInterval function
    
    number--; //  Decreases number by one.
    
    $("#timer").html("<h2>" + "Time Remaining: " + number + "</h2>");//rewrites the number in the #quiz-box element.

    if (number === 0) { //  Once number hits zero...

      //  ...hide the quiz box and show the end box
      $("#quiz-box").hide();
      $("#end-box").show();
    }
  }

//submit button 
$("#sub-button").on("click", function(){
    $("#quiz-box").hide();
    $("#end-box").show();
})

//gameEnd page
$("#reset-button").on("click", function(){
    gameStart();
})




gameStart();
    
});//end of document ready