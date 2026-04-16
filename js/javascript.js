let sound = document.querySelector(".sound");

let play = document.querySelector(".play");
play.addEventListener("click", function() {
    sound.play();
    document.querySelector(".level").innerHTML = (sound.volume * 100) + "%";
    console.log("sound is playing");
})


let volume = document.querySelector(".volume");
volume.addEventListener("input", function(event) {
    document.querySelector(".level").innerHTML = event.target.value + "%";
    sound.volume = 0 + (event.target.value / 100);
    console.log("The volume is " + (sound.volume * 100) + "%");
})

let mute = document.querySelector(".mute");
mute.addEventListener("click", function () {
    if (sound.muted == false) {
        console.log("Muted");
        mute.innerHTML = "Unmute";
        sound.muted = true;
    } else {
        console.log("Unmuted");
        mute.innerHTML = "Mute";
        sound.muted = false;
    }
})

