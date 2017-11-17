//global variables

var random_result;
var lost = 0;
var win = 0;
var previous = 0;

//  $(".crystal").attr('class', );


var resetAndStart = function() {
    $(".crystals").empty();
        random_result = Math.floor(Math.random() * 101) + 19;


        $("#result").html('Random Result: ' + random_result);
        //console.log(random_result);

        for(var i = 0; i < 4; i++) {

            var random = Math.floor(Math.random() *11) + 1;
            //console.log(random);
            var crystal = $("<div>");
                crystal.attr({
                    "class": 'crystal',
                    "data-random": random
                });

                $(".crystals").append(crystal);

        }
    }
resetAndStart();



// Event Delegation

$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    if(previous > random_result){
        lost++;
        console.log("You Lost!");
        $("#lost").html(lost);
        previous = 0;
        resetAndStart();
    }
    else if(previous === random_result){
        win++;
        console.log("You Win!");
        $("#win").html(win);
        previous = 0;
        resetAndStart();
    }
    console.log(previous);
   

});

// Pseudo coding Crystal Game


// Game with 4 crystals and Random Result

// each crystal needs a random number between 1-12, that regenerates with each W/L
// when any crystal is clicked the total score builds

// player wins if total score equals random result
//if goes over random result player loses






