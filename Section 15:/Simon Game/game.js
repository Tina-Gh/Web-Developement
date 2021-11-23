var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;

function playSound(name){
    var audio_ = new Audio('sounds/' + name + '.mp3');
    audio_.play();
}

function animatePress(currentColour){
    $("." + currentColour).addClass("pressed"); //or: #
    setTimeout(function(){
        $("." + currentColour).removeClass("pressed"); //or: #
    }, 100);
}


function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}


function nextSequence(){
    level += 1;
    $("#level-title").text("Level " + level);

    userClickedPattern = [];

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    //FLASH FOR THE BUTTON
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    //PLAY THE SOUND FOR THE BUTTON
    playSound(randomChosenColour);
}

//ON CLICK, DO:
$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
});


$(document).keydown(function(event){ //or delete "event"
    if(!started){
        $("#level-title").text("Level 0");
        nextSequence();
        started = true;
    }
})


function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){ 
        console.log("success");
    if(userClickedPattern.length === gamePattern.length){
        setTimeout(function(){
            nextSequence()}, 1000);
    }
    }
    else{
        console.log("wrong")
        playSound("wrong.mp3");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver()
    }
}

