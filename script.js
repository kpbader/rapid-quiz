// When I click the start button...    

function myTimer () {
// countdown 
var counter = 60;
var countdown = function() {
    counter--;
        if(counter === 0){
            clearInterval(startCountdown);
        };
        // displays time
        document.querySelector(".number-count").innerHTML = counter;
};
var startCountdown = setInterval(countdown, 1000);
};

// Then I am presented with a question (with possible answers)

   

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