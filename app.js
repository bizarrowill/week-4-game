//                                   global variables

var random_result;
var lost = 0;
var win = 0;
var previous = 0;

//  $(".crystal").attr('class', );


var resetAndStart = function() {
        // jQuery grabs elements with the class "crystals" and empties the content of those elements
        $(".crystals").empty();

        var images = [
                    'https://i.pinimg.com/originals/d5/83/46/d58346d894f0acfcfeb550e6ad2eaf73.jpg', 
                    'https://i.pinimg.com/originals/60/87/8c/60878cc7f7a1e3a6aa03165ca86c667d.jpg', 
                    'https://i.pinimg.com/originals/0f/01/ef/0f01efbd73a51355737787968b6d8d44.jpg', 
                    'https://upload.wikimedia.org/wikipedia/commons/3/3e/Quartz-Topaz-gem7-76d.jpg'];
        
        random_result = Math.floor(Math.random() * 102) + 19;


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
                crystal.css({
                    "background-image":"url('" + images[i] + "')",
                    "background-size":"cover"

                });

                crystal.css({
                    "background-image":"url('" + images[i] + "')",
                    "background-size":"cover"
    
                });

                $(".crystals").append(crystal);

        
        }
        
        $("#previous").html("Total Score: "" + previous);
    }
    
    
resetAndStart();



//                                      Event Delegation 

$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    // this is not working $("#previous).html("Total Score: ",previous);

    console.log(previous);

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






