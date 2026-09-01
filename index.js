// =====================================
// DRUM KIT - JAVASCRIPT
// =====================================

// Sound files matched to the letters
const sounds = {
    w: "sounds/tom-1.mp3",
    a: "sounds/tom-2.mp3",
    s: "sounds/tom-3.mp3",
    d: "sounds/tom-4.mp3",
    j: "sounds/snare.mp3",
    k: "sounds/crash.mp3",
    l: "sounds/kick-bass.mp3"
};


// =====================================
// PLAY SOUND
// =====================================

function playSound(key) {

    if (sounds[key]) {

        const audio = new Audio(sounds[key]);

        audio.currentTime = 0;

        audio.play().catch(function(error) {
            console.error("Sound could not play:", error);
        });

    } else {

        console.log("No sound assigned to:", key);

    }
}


// =====================================
// BUTTON CLICK
// =====================================

const buttons = document.querySelectorAll(".drum");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const key = this.textContent.trim().toLowerCase();

        playSound(key);

        buttonAnimation(key);

    });

});


// =====================================
// KEYBOARD
// =====================================

document.addEventListener("keydown", function(event) {

    const key = event.key.toLowerCase();

    if (sounds[key]) {

        playSound(key);

        buttonAnimation(key);

    }

});


// =====================================
// BUTTON ANIMATION
// =====================================

function buttonAnimation(currentKey) {

    const activeButton = document.querySelector("." + currentKey);

    if (activeButton) {

        activeButton.classList.add("pressed");

        setTimeout(function() {

            activeButton.classList.remove("pressed");

        }, 100);

    }

}