console.log("THIS IS MY NEW SCRIPT");
alert("New script loaded!");

// ===============================
// HOME PAGE ❤️
// ===============================

// Relationship Start Date
const relationshipStartDate = new Date("2026-03-14");

function updateCounter() {

    const daysElement = document.getElementById("days");

    if (!daysElement) return;

    const today = new Date();

    const difference = today - relationshipStartDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    daysElement.textContent = days + " Days ❤️";

}

updateCounter();


// ===============================
// LIVE CLOCK 🕒
// ===============================

function updateClock() {

    const clock = document.getElementById("clock");

    if (!clock) return;

    clock.textContent = new Date().toLocaleTimeString();

}

updateClock();

setInterval(updateClock, 1000);


// ===============================
// COUNTDOWN PAGE ❤️
// ===============================

function updateCountdown() {

    const daysLeft = document.getElementById("daysLeft");

    // Only run on countdown.html
    if (!daysLeft) return;

    // Countdown permanently finished
    document.getElementById("daysLeft").textContent = "0";
    document.getElementById("hoursLeft").textContent = "0";
    document.getElementById("minutesLeft").textContent = "0";
    document.getElementById("secondsLeft").textContent = "0";

    // Message
    const progressText = document.getElementById("progressText");

    if (progressText) {

        progressText.innerHTML =
            "❤️ We finally met on <strong>23 July 2026</strong>!<br><br>" +
            "The countdown is over, but our journey together has only just begun. ❤️";

    }

    // Stop the heart at the end of the road
    const heart = document.getElementById("heart");

    if (heart) {

        heart.style.left = "100%";

    }

}

updateCountdown();


// ===============================
// LETTERS PAGE ❤️
// ===============================

function toggleLetter(letterId) {

    const letter = document.getElementById(letterId);

    if (!letter) return;

    if (
        letter.style.display === "none" ||
        letter.style.display === ""
    ) {

        letter.style.display = "block";

    } else {

        letter.style.display = "none";

    }

}

// Hide all letters when page loads
document.addEventListener("DOMContentLoaded", function () {

    const letters = document.querySelectorAll(".letter-content");

    letters.forEach(function(letter) {

        letter.style.display = "none";

    });

});

