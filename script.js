let boom = document.getElementById("boom");
let clap = document.getElementById("clap");
let hiHat = document.getElementById("hiHat");
let kick = document.getElementById("kick");
let openhat = document.getElementById("openHat");
let ride = document.getElementById("ride");
let snare = document.getElementById("snare");
let tink = document.getElementById("tink");
let tom = document.getElementById("tom");

// adding play sounds on click
let allKeys = document.querySelectorAll(".keyswrapper");
let allSounds = [boom, clap, hiHat, kick, openhat, ride, snare, tink, tom];

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    console.log(e.propertyName);
}
const keys = document.querySelectorAll('.keys');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//configure sounds and attach to keyboard//
document.addEventListener('keypress', (keyValue) => {
    if (keyValue.key === "a") {
        boomwrapper.style.animation = "zoom 0.1s linear"
        setTimeout(() => {
            boomwrapper.style.removeProperty('animation')
        }, 100)
        boom.pause()
        boom.currentTime = 0
        boom.play();
    } else if (keyValue.key === "s") {
        clapwrapper.style.animation = "zoom 0.1s linear"
        setTimeout(() => {
            clapwrapper.style.removeProperty('animation')
        }, 100)
        clap.pause()
        clap.currentTime = 0
        clap.play();
    } else if (keyValue.key === "d") {
        hiHatwrapper.style.animation = "zoom 0.1s linear"
        setTimeout(() => {
            hiHatwrapper.style.removeProperty('animation')
        }, 100)
        hiHat.pause()
        hiHat.currentTime = 0
        hiHat.play();
    } else if (keyValue.key === "f") {
        kickwrapper.style.animation = "zoom 0.1s linear"
        setTimeout(() => {
            kickwrapper.style.removeProperty('animation')
        }, 100)
        kick.pause()
        kick.currentTime = 0
        kick.play();
    } else if (keyValue.key === "g") {
        openHatwrapper.style.animation = "zoom 0.1s linear"
        setTimeout(() => {
            openHatwrapper.style.removeProperty('animation')
        }, 100)
        openHat.pause()
        openHat.currentTime = 0
        openHat.play();
    } else if (keyValue.key === "h") {
        ridewrapper.style.animation = "zoom 0.1s linear"
        setTimeout(() => {
            ridewrapper.style.removeProperty('animation')
        }, 100)
        ride.pause()
        ride.currentTime = 0
        ride.play();
    } else if (keyValue.key === "j") {
        snarewrapper.style.animation = "zoom 0.1s linear"
        setTimeout(() => {
            snarewrapper.style.removeProperty('animation')
        }, 100)
        snare.pause()
        snare.currentTime = 0
        snare.play();
    } else if (keyValue.key === "k") {
        tinkwrapper.style.animation = "zoom 0.1s linear"
        setTimeout(() => {
            tinkwrapper.style.removeProperty('animation')
        }, 100)
        tink.pause()
        tink.currentTime = 0
        tink.play();
    } else if (keyValue.key === "l") {
        tomwrapper.style.animation = "zoom 0.1s linear"
        setTimeout(() => {
            tomwrapper.style.removeProperty('animation')
        }, 250)
        tom.pause()
        tom.currentTime = 0
        tom.play();
    }
  })

  //configure click on screen key sounds//
let count = 0
allKeys.forEach((key, index) => {
    key.addEventListener("click", () => {
        key.style.animation = "zoom 0.1s linear"
        setTimeout(() => {
            key.style.removeProperty('animation')
        }, 250)
        allSounds[index].pause()
        allSounds[index].currentTime = 0
        allSounds[index].play()
    });
});

