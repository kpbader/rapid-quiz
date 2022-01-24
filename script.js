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
            // END GAME 
            finalScore();
        };
        // displays time
        document.querySelector(".number-count").innerHTML = counter;
};
var startCountdown = setInterval(countdown, 1000);
question1();
};
// FUNCTION TIMER END

var questions = [
  "Which of the following is the correct word or letter for the paragraph tag in HTML?",
  "Which of the following is the correct symbol for ID?",
  "Which of the following is the correct wording for a section element tag?",
  "What is the correct way to change a font size to 20 px?",
  "How do I print something to the console?" ];


    var question1 = function () {
      $(".answer").remove();
        // displays question
        document.querySelector(".current-question").textContent = questions[0];
        // reveals buttons
        var x = document.querySelector("#allButtons") ;
        x.classList.remove("current-buttons");
        // buttons with specific options
        $(".card-body").append("<button class='answer' data-task='0'> p </button>");
        $(".card-body").append("<button class='answer' data-task='1'> $p </button>");
        $(".card-body").append("<button class='answer' data-task='2'> paragraph </button>");
        $(".card-body").append("<button class='answer' data-task='3'> P! </button>");
        $('.answer').click(function() {
            var id = $(this).attr('data-task'); // $(this) refers to button that was clicked
            if (id == '0') {
              counter = counter - 0;
              $(".result").html("<h4>Correct!</h4>");
            } else {
              $(".result").html("<h4>Wrong!</h4>")
              counter = counter - 5;
            }
            question2();
          });
    };

     var question2 = function () {
      $(".answer").remove();
        // displays question 
        document.querySelector(".current-question").textContent = questions[1];

        // reveals buttons
        var x = document.querySelector("#allButtons");
        x.classList.remove("current-buttons");

              // buttons with specific options
              $(".card-body").append("<button class='answer' data-answer='0'> % </button>");
              $(".card-body").append("<button class='answer' data-answer='1'> $ </button>");
              $(".card-body").append("<button class='answer' data-answer='2'> @ </button>");
              $(".card-body").append("<button class='answer' data-answer='3'> # </button>");

        $('.answer').click(function() {
            var id = $(this).attr('data-answer'); // $(this) refers to button that was clicked

            if (id == "3") {
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
            question3();
          });
          
    };

    var question3 = function () {
      $(".answer").remove();
        // displays question 
        document.querySelector(".current-question").textContent = questions[2];

        // reveals buttons
        var x = document.querySelector("#allButtons") ;
        x.classList.remove("current-buttons");

        // buttons with specific options
        $(".card-body").append("<button class='answer' data-answer='0'> $section </button>");
        $(".card-body").append("<button class='answer' data-answer='1'> $ </button>");
        $(".card-body").append("<button class='answer' data-answer='2'> section </button>");
        $(".card-body").append("<button class='answer' data-answer='3'> SEC </button>");

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
            question4();
          });
    };


    var question4 = function () {
      $(".answer").remove();
        // displays question 
        document.querySelector(".current-question").textContent = questions[3];

        // reveals buttons
        var x = document.querySelector("#allButtons") ;
        x.classList.remove("current-buttons");

        // buttons with specific options
        $(".card-body").append("<button class='answer' data-answer='0'> FS-20 </button>");
        $(".card-body").append("<button class='answer' data-answer='1'> font-size:20px; </button>");
        $(".card-body").append("<button class='answer' data-answer='2'> fontSize = 20 </button>");
        $(".card-body").append("<button class='answer' data-answer='3'> size/font is 20 </button>");

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
            //     }
            }
            question5();
          });
    };

    var question5 = function () {
      $(".answer").remove();
        // displays question 
        document.querySelector(".current-question").textContent = questions[4];

        // reveals buttons
        var x = document.querySelector("#allButtons") ;
        x.classList.remove("current-buttons");

         // buttons with specific options
        $(".card-body").append("<button class='answer' data-answer='0'> log()console. </button>");
        $(".card-body").append("<button class='answer' data-answer='1'> consolePrint </button>");
        $(".card-body").append("<button class='answer' data-answer='2'> console.log() </button>");
        $(".card-body").append("<button class='answer' data-answer='3'> printConsole </button>");

        $('.answer').click(function() {
            var id = $(this).attr('data-answer'); // $(this) refers to button that was clicked
            if (id == "2") {
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

    // FINAL SCORE 
    function finalScore () {

       // remove all stuff from page
      $(".current-question").remove();
      $(".answer").remove();
      $(".number-count").remove();
      $(".result").remove();
      
      // clear/stop time 

      // var hiddenCount = document.querySelector(".hide-count");
      // hiddenCount.classList.remove("hide-count");

      var hiddenForm = document.querySelector(".hide");
      hiddenForm.classList.remove("hide");
    
      // display time left as score ("your final score is + 'counter'.")
      document.querySelector(".final-score").textContent = "Your final score is " + counter;


       // submission for initials

      var savedScores = document.querySelector(".score-list");

      var buttonEl = document.querySelector(".submit-btn");
      buttonEl.addEventListener("click", function() {
        var initialSubmission = document.getElementById("submitText").value;
        var z = document.createElement("li");
        z.className="lasagna";
        z.textContent = initialSubmission;
        savedScores.appendChild(z);
        localStorage.setItem("initialSubmission", initialSubmission);
      });

    };

    

    
