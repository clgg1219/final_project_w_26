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

let hide = document.querySelector(".hide");
hide.addEventListener("click", function () {
    document.querySelector(".content").style.display = "none";
    document.querySelector(".show").style.display = "block";
    console.log("hid content");
})

let show = document.querySelector(".show");
show.addEventListener("click", function () {
    document.querySelector(".content").style.display = "block";
    document.querySelector(".show").style.display = "none";
    console.log("shown content");
})

/*Check to see if stop_element exists first; wrap everything in if (stop_element)*/

let stop_storm = document.getElementById("stop_storm");
if (stop_storm) {
    let storm_bg = document.getElementById("storm_page");
    stop_storm.addEventListener("click", function() {
    if (stop_storm.textContent == "stop animation") {
        storm_bg.style.backgroundImage = "url(/media/storm_still.png)";
        stop_storm.textContent = "start animation";
        console.log("stopped animation");
    } else {
        storm_bg.style.backgroundImage = "url(/media/storm.gif)";
        stop_storm.textContent = "stop animation";
        console.log("started animation");
    }
})
}


let stop_beach = document.getElementById("stop_beach");
if (stop_beach){
    let beach_bg = document.getElementById("beach_page");
    stop_beach.addEventListener("click", function() {
    if (stop_beach.textContent == "stop animation") {
        beach_bg.style.backgroundImage = "url(/media/beach_still.png)";
        stop_beach.textContent = "start animation";
        console.log("stopped animation");
    } else {
        beach_bg.style.backgroundImage = "url(/media/beach.gif)";
        stop_beach.textContent = "stop animation";
        console.log("started animation");
    }
    })
}


let stop_rain = document.getElementById("stop_rain");
if (stop_rain) {
    let rain_bg = document.getElementById("rain_page");
    stop_rain.addEventListener("click", function() {
    if (stop_rain.textContent == "stop animation") {
        rain_bg.style.backgroundImage = "url(/media/rain_still.png)";
        stop_rain.textContent = "start animation";
    } else {
        rain_bg.style.backgroundImage = "url(/media/rain.gif)";
        stop_rain.textContent = "stop animation";
    }
})
}

