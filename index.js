for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // alert("I got clicked");
        addsound(this.innerHTML);
        addAnimation(this.innerHTML);
        // if(this.innerHTML == 'w'){
        //     var audio = new Audio('sounds/crash.mp3');
        //     audio.play();
        // }
        // if(this.innerHTML == 'a'){
        //     var audio = new Audio('./sounds/kick-bass.mp3');
        //     audio.play();
        // }
        // if(this.innerHTML == 's'){
        //     var audio = new Audio('./sounds/snare.mp3');
        //     audio.play();
        // }
        // if(this.innerHTML == 'd'){
        //     var audio = new Audio('./sounds/tom-1.mp3');
        //     audio.play();
        // }
        // if(this.innerHTML == 'j'){
        //     var audio = new Audio('./sounds/tom-2.mp3');
        //     audio.play();
        // }
        // if(this.innerHTML == 'k'){
        //     var audio = new Audio('./sounds/tom-3.mp3');
        //     audio.play();
        // }
        // if(this.innerHTML == 'l'){
        //     var audio = new Audio('./sounds/tom-4.mp3');
        //     audio.play();
        // }
    });
}
document.addEventListener("keydown" ,function(event){
    // alert("key is pressed");
    addsound(event.key);
    addAnimation(event.key);
    // switch(event.key)
    // {
    //     case "w":
    //         var crash = new Audio('sounds/crash.mp3');
    //         crash.play();
    //         break;
    //     case "a":
    //         var kick = new Audio('sounds/kick-bass.mp3');
    //         kick.play();
    //         break;
    //     case "s":
    //         var snare = new Audio('sounds/snare.mp3');
    //         snare.play();
    //         break;
    //     case "d":
    //         var tom1 = new Audio('sounds/tom-1.mp3');
    //         tom1.play();
    //         break;
    //     case "j":
    //         var tom2 = new Audio('sounds/tom-2.mp3');
    //         tom2.play();
    //         break;
    //     case "k":
        //     var tom3 = new Audio('sounds/tom-3.mp3');
        //     tom3.play();
        //     break;
        // case "l":
        //     var tom4 = new Audio('sounds/tom-4.mp3');
        //     tom4.play();
        //     break;
        // default:console.log("key is pressed");

    }
);

function addsound(key){
    switch(key)
    {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        default:console.log("key is pressed");
    }

}
function addAnimation(key){
    var activebutton =  document.querySelector("."+key);
    activebutton.classList.add("pressed");
    

    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },.100)
    
}



