// When I click the start button...    
var counter = 100;
// FUNCTION TIMER START

function myTimer () {
// countdown 
$("#startQuiz").remove(); 
$(".card-header").remove();
var countdown = function() {
    counter--;
        if(counter === 0){
            clearInterval(startCountdown)
        };
        // displays time
        document.querySelector(".number-count").innerHTML = counter;
};
var startCountdown = setInterval(countdown, 1000);
firstQuestion();
};

// FUNCTION TIMER END

// Then I am presented with a question (with possible answers)

var questions = [
            "Which of the following is the correct element tag for a paragraph in HTML?",
            "Which of the following is the correct symbol for ID?",
            "Which of the following is the correct element tag for a section?",
            "What is the correct way to change a font size to 20 px?",
            "How do I print something to the console?" ];


    var firstQuestion = function () {
        // displays question 
        document.querySelector(".current-question").textContent = questions[0];

        // reveals buttons
        var x = document.querySelector("#allButtons") ;
        x.classList.remove("current-buttons");

        // buttons with specific options 
        document.querySelector(".btn-1").textContent = "var";
        document.querySelector(".btn-2").textContent = "<p>";
        document.querySelector(".btn-3").textContent = "<PARAGRAPH>";
        document.querySelector(".btn-4").textContent = "<a>";

        $('.answer').click(function() {
            var id = $(this).attr('data-answer'); // $(this) refers to button that was clicked

            if (id == "1") {
              $(".result").html("<h4 class='text-success'>Correct!</h4>");
              counter = counter - 0;
            } else {
              $(".result").html("<h4 class='text-danger'>Incorrect!</h4>")
              counter = counter - 5;
            //   if (counter <= 0) {
            //       finalScore();
            //   }
            }
            secondQuestion();
          });
    };
    

     var secondQuestion = function () {
        // displays question 
        document.querySelector(".current-question").textContent = questions[1];

        // reveals buttons
        var x = document.querySelector("#allButtons") ;
        x.classList.remove("current-buttons");

        // buttons with specific options 
        document.querySelector(".btn-1").textContent = "$";
        document.querySelector(".btn-2").textContent = "*";
        document.querySelector(".btn-3").textContent = "&";
        document.querySelector(".btn-4").textContent = "#";

        $('.answer').click(function() {
            var id = $(this).attr('data-answer'); // $(this) refers to button that was clicked

            if (id == "3") {
              $(".result").html("<h4 class='text-success'>Correct!</h4>");
              counter = counter - 0;
            } 
            else {
              $(".result").html("<h4 class='text-danger'>Incorrect!</h4>")
              counter = counter- 5;
            //   if (counter <= 0) {
            //     finalScore();
            //     }
            };
            thirdQuestion();
          });
          
    };

    var thirdQuestion = function () {
        // displays question 
        document.querySelector(".current-question").textContent = questions[2];

        // reveals buttons
        var x = document.querySelector("#allButtons") ;
        x.classList.remove("current-buttons");

        // buttons with specific options 
        document.querySelector(".btn-1").textContent = "<div>";
        document.querySelector(".btn-2").textContent = "section";
        document.querySelector(".btn-3").textContent = "<section>";
        document.querySelector(".btn-4").textContent = "<sec>";

        $('.answer').click(function() {
            var id = $(this).attr('data-answer'); // $(this) refers to button that was clicked
            if (id == "2") {
              $(".result").html("<h4 class='text-success'>Correct!</h4>");
              counter = counter - 0;
            } 
            else {
              $(".result").html("<h4 class='text-danger'>Incorrect!</h4>")
              counter = counter - 5;
            //   if (counter <= 0) {
            //     finalScore();
            //     }
            };
            fourthQuestion();
          });
    };


    var fourthQuestion = function () {
        // displays question 
        document.querySelector(".current-question").textContent = questions[3];

        // reveals buttons
        var x = document.querySelector("#allButtons") ;
        x.classList.remove("current-buttons");

        // buttons with specific options 
        document.querySelector(".btn-1").textContent = "font-size: 20px";
        document.querySelector(".btn-2").textContent = "fontSize:20px";
        document.querySelector(".btn-3").textContent = "fontSIZE: 20px";
        document.querySelector(".btn-4").textContent = "font-size = 20px";

        $('.answer').click(function() {
            var id = $(this).attr('data-answer'); // $(this) refers to button that was clicked
            if (id == "0") {
                counter = counter - 0;
              $(".result").html("<h4 class='text-success'>Correct!</h4>");
            } else {
              $(".result").html("<h4 class='text-danger'>Incorrect!</h4>")
              counter = counter - 5;
            //   if (counter <= 0) {
            //     finalScore();
            //     }
            }
            fifthQuestion();
          });
    };

    var fifthQuestion = function () {
        // displays question 
        document.querySelector(".current-question").textContent = questions[4];

        // reveals buttons
        var x = document.querySelector("#allButtons") ;
        x.classList.remove("current-buttons");

        // buttons with specific options 
        document.querySelector(".btn-1").textContent = "console.print()", 
        document.querySelector(".btn-2").textContent = "console.log()",
        document.querySelector(".btn-3").textContent = "console.print",
        document.querySelector(".btn-4").textContent = "console.PRINT(print)"

        $('.answer').click(function() {
            var id = $(this).attr('data-answer'); // $(this) refers to button that was clicked
            if (id == "1") {
                counter = counter - 0;
              $(".result").html("<h4 class='text-success'>Correct!</h4>");
            } else {
              $(".result").html("<h4 class='text-danger'>Incorrect!</h4>")
              counter = counter - 5;
            //   if (counter <= 0) {
            //     finalScore();
            // }
            }
            finalScore();
          });
    };


    function finalScore () {
        // remove all stuff from page
        // display time left as score ("your final score is + 'counter'.")
    }


 

// When I answer a question 
// Then I am presented with another question

// When I answer a question incorrectly
// Then time is subtracted



    // If "" 
        // return time - 5000 

// When all questions are answered OR the time reaches 0
// Then the game is over

    // If "" || time === 0 ........

// When the game is over
// Then I can save my initials/score 

    //localStorage....

 