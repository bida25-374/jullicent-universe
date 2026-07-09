console.log("JavaScript connected!");

// ===============================
// HOME PAGE ❤️
// ===============================

// Together Since
const relationshipStartDate = new Date("2026-03-12");

function updateCounter() {

    const daysElement = document.getElementById("days");

    if (!daysElement) return;

    const today = new Date();

    const difference = today - relationshipStartDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    daysElement.textContent = days + " Days ❤️";

}

updateCounter();


// Live Clock
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

    // Only run on countdown.html
    const daysLeft = document.getElementById("daysLeft");

    if (!daysLeft) return;

    // Meeting Date (1 August 2026)
    const meetingDate = new Date(2026, 7, 1, 0, 0, 0);

    // Current Date
    const now = new Date();

    // Time Difference
    const difference = meetingDate.getTime() - now.getTime();

    // If meeting day has arrived
    if (difference <= 0) {

        document.getElementById("daysLeft").textContent = "0";
        document.getElementById("hoursLeft").textContent = "0";
        document.getElementById("minutesLeft").textContent = "0";
        document.getElementById("secondsLeft").textContent = "0";

        const progressText = document.getElementById("progressText");

        if (progressText) {
            progressText.textContent = "🎉 Today is finally here! ❤️";
        }

        return;
    }

    // Calculate Time
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) /
        1000
    );

    // Display Time
    document.getElementById("daysLeft").textContent = days;
    document.getElementById("hoursLeft").textContent = hours;
    document.getElementById("minutesLeft").textContent = minutes;
    document.getElementById("secondsLeft").textContent = seconds;
// ===============================
// HEART JOURNEY ❤️
// ===============================

// Journey starts on 7 July 2026
const journeyStart = new Date(2026, 6, 7, 0, 0, 0);

const totalJourney = meetingDate.getTime() - journeyStart.getTime();
const completedJourney = now.getTime() - journeyStart.getTime();

let progress = (completedJourney / totalJourney) * 100;

// Keep progress between 0% and 100%
if (progress < 0) progress = 0;
if (progress > 100) progress = 100;

const heart = document.getElementById("heart");

if (heart) {
    heart.style.left = progress + "%";
}
}

// Start Countdown
updateCountdown();

// Update Every Second
setInterval(updateCountdown, 1000);

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

// Hide all letters when the page loads
document.addEventListener("DOMContentLoaded", function () {

    const letters = document.querySelectorAll(".letter-content");

    letters.forEach(function(letter) {

        letter.style.display = "none";

    });

});