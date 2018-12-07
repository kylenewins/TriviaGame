$(document).ready(function(){
//global variables
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var number = 21;
var timerInt;

//gamestart function resets to the default state, is run once at the beginning and then on reset
var gameStart = function(){
    //correct and incorrect values/timer reset
    correct=0;
    incorrect=0;
    unanswered=0;
    number = 21;

    //clears the timer interval and empties the html div
    clearInterval(timerInt);
    $("#timer").empty();

    //sets which div by default shows up first
    $("#start-box").show();
    $("#quiz-box").hide();
    $("#end-box").hide();

    //unchecks all of the radio inputs
    $("#Ques1True").prop('checked', false);
    $("#Ques1False").prop('checked', false);

    $("#Ques2True").prop('checked', false);
    $("#Ques2False").prop('checked', false);

    $("#Ques3True").prop('checked', false);
    $("#Ques3False").prop('checked', false);

    $("#Ques4True").prop('checked', false);
    $("#Ques4False").prop('checked', false);

    $("#Ques5True").prop('checked', false);
    $("#Ques5False").prop('checked', false);
}

//show the quiz page and starts the timer on start button click
$("#start-button").on("click", function(){
    $("#start-box").hide();
    $("#quiz-box").show();
    run();
})

//display the questions
$("#timerText").text("Time Remaining: ");//rewrites the number in the #quiz-box element.


//display interval timer at the top of quiz page
function run() {
    clearInterval(timerInt);
    timerInt = setInterval(decrease, 1000);
  }
 
  function decrease() {  //function that is run in the setInterval function
    
    number--; //  Decreases number by one.
    
    $("#timerText").text("Time Remaining: " + number);//rewrites the number in the #quiz-box element.

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

    //Button Checks
    //Question 1
    if($('#Ques1True').is(':checked')) { correct++}
    else if ($('#Ques1False').is(':checked')) { incorrect++}
    else if(($("#Ques1True").prop('checked', false)) && ($("#Ques1False").prop('checked', false))) {
        unanswered++
    };
    //Question 2
    if($('#Ques2True').is(':checked')) { incorrect++}
    else if($('#Ques2False').is(':checked')) { correct++}
    else if(($("#Ques2True").prop('checked', false)) && ($("#Ques2False").prop('checked', false))) {
        unanswered++
    };
    //Question 3
    if($('#Ques3True').is(':checked')) { correct++ }
    else if($('#Ques3False').is(':checked')) { incorrect++ }
    else if(($("#Ques3True").prop('checked', false)) && ($("#Ques3False").prop('checked', false))) {
        unanswered++
    };
    //Question 4
    if($('#Ques4True').is(':checked')) { incorrect++ }
    else if($('#Ques4False').is(':checked')) { correct++ }
    else if(($("#Ques4True").prop('checked', false)) && ($("#Ques4False").prop('checked', false))) {
        unanswered++
    };
    //Question 5
    if($('#Ques5True').is(':checked')) { correct++ }
    else if($('#Ques5False').is(':checked')) { incorrect++ }
    else if(($("#Ques5True").prop('checked', false)) && ($("#Ques5False").prop('checked', false))) {
        unanswered++
    };

    $("#totalCorrect").text("Correct Answers: " + correct);
    $("#totalIncorrect").text("Incorrect Answers: " + incorrect);
    $("#unanswered").text("Unanswered: " + unanswered);
})


//gameEnd page
$("#reset-button").on("click", function(){
    gameStart();
})

console.log($("#Ques1True").checked)
gameStart();
    
});//end of document ready