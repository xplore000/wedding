const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");
const audio = document.getElementById("background-audio"); // Reference to the audio element

function handleScroll() {
    let offset = window.pageYOffset;

    // Parallax for home-img-lg
    if (parallax) {
        parallax.style.backgroundPositionX = offset * (-0.3) - 100 + "px";
    }

    // Parallax for parallax1
    if (parallax1) {
        parallax1.style.backgroundPositionY = (offset - 3100) * 0.1 + "px";
    }

    // Parallax for parallax2
    if (parallax2) {
        parallax2.style.backgroundPositionY = (offset - 4800) * (-0.1) + "px";
    }

    // Reveal effect
    reveal();
}

// Add the throttled scroll event listener
window.addEventListener("scroll", throttle(handleScroll, 100));

// Checkbox control function
function myFunction() {
    const checkbox = document.getElementById("check");
    if (checkbox) {
        checkbox.checked = false;
    }
}

// Reveal elements on scroll
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

// Throttle function to limit how often handleScroll is called
function throttle(func, limit) {
    let lastCall = 0;
    return function () {
        const now = (new Date()).getTime();
        if (now - lastCall >= limit) {
            lastCall = now;
            func();
        }
    };
}

// Music play on first interaction
function playMusicOnInteraction() {
    if (audio) {
        audio.play();  // Play the audio
    }

    // Remove event listeners after the first interaction
    window.removeEventListener("click", playMusicOnInteraction);
    window.removeEventListener("touchstart", playMusicOnInteraction);
    window.removeEventListener("keydown", playMusicOnInteraction);
}

// Attach event listeners to play music on any interaction
window.addEventListener("click", playMusicOnInteraction);
window.addEventListener("touchstart", playMusicOnInteraction);
window.addEventListener("keydown", playMusicOnInteraction);
