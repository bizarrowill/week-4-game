//                               VARIABLE

var crystalOne
var crystalTwo
var crystalThree
var crystalFour

var wins
var losses
var totalScore

var randomNumber

//                               CLICK FUNCTIONS


//      Loads page for click events
$(document).ready(function(){
    console.log("document ready");
    
        // crystalOne button
        $("#crystalOne").click(function(){
        totalScore =  totalScore + crystalOne;     
        console.log("click crystalOne updated totalScore");
        });
        



        /// crystalTwo button
        $("#crystalTwo").click(function(){
            totalScore =  totalScore + crystalTwo;     
        });




        // crystalThree button
        $("#crystalThree").click(function(){
            totalScore =  totalScore + crystalThree;     
        });




        // crystalFour button
        $("#crystalFour").click(function(){
            totalScore =  totalScore + crystalFour;     
        });




// add number
    $("button").click(function(){
        $("p").hide();
    });
});


//                            FUNCTIONS
//   add win
//   you lose 
//   after win/lose reset values 






function randomNumberGenerator() {
        randomNumber = ();
        //   random starting number between 19-120
        //   update randomNumber display/html'
        getRandom = function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          };

};



function startGame() {
    console.log("startGame function works")
    
};

function resetGame() {
    randomNumberGenerator();
    totalScore = 0;
    //   update totalScore html


    
};

function winGame() {
   if (totalScore === randomNumber) {
       wins++;
       //  update html to reflect wins variable
       // display you win message, update html
       resetGame();
       $("#your-score").text(currentScore);
    
   }

   alert("Congrats. You won!");
   console.log("You won");

};


function loseGame() {
    if (totalScore > randomNumber)  {
        losses++;
        //  update html to reflect losses variable
       // display you lost message, update html
        resetGame();
    }
    alert("Sorry. You lost!");
    console.log("You Lost");



    
};



function crystalValuesGenerator() {

    //  Each crystal should have a random hidden value between 1 - 12
    
    var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    
                    for (var i = 0; i < numberOptions.length; i++) {
    
                    var imageCrystal = $("<img>");
                    
                    imageCrystal.addClass("crystal-image");
    
                    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
                    
                    // Each imageCrystal will be given a data attribute called data-crystalValue.
                    // This data attribute will be set equal to the array value.
                    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
                    
                    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
                    $("#crystals").append(imageCrystal);
                    }
    
};



function() {

    
};

function() {

    
};

function() {

    
};

function() {

    
};