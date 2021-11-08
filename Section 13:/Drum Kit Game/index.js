var numDrumButtons = document.querySelectorAll(".drum").length; 
for (var i=0; i<numDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClicks);
}


//Detecting button press
function handleClicks(){
    // document.querySelector("button").innerText;
    this.style.color = "white";
    var buttonInnerHTML = this.innerHTML;
    MakeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}


//Detecting keyboard press
document.addEventListener("keydown", function(event){
    MakeSound(event.key)
    buttonAnimation(event.key);
});


function MakeSound(InputKey){
    switch (InputKey) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play(); 
            break;   
        default:
            break;
    }
}



function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    // activeButton <- pressed
    activeButton.classList.add("pressed");
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100);

}