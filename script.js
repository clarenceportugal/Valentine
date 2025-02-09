let moveSpeed = 0.3; // Initial movement speed for the "No" button
let clickCount = 0; // Track how many times "No" was clicked/tapped

function yesAnswer() {
    const popup = document.getElementById("popup");
    popup.classList.add("show");

    // Play romantic music
    document.getElementById("loveSong").play();

    // Create a beautiful explosion of hearts 💖
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createHeart(true);
        }, i * 50);
    }
}

// Function to move the "No" button (gets faster over time)
function moveButton() {
    const noButton = document.getElementById("noButton");
    const maxWidth = window.innerWidth - noButton.offsetWidth - 20;
    const maxHeight = window.innerHeight - noButton.offsetHeight - 20;

    let x = Math.random() * maxWidth;
    let y = Math.random() * maxHeight;

    noButton.style.transition = `top ${moveSpeed}s ease, left ${moveSpeed}s ease`;
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;

    clickCount++;

    // Make it faster every time they try to click "No" 🤣
    if (clickCount % 3 === 0) {
        moveSpeed = Math.max(0.05, moveSpeed - 0.05);
    }
}

// Detect if it's a mobile device
function isMobileDevice() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

// Attach event listeners for both desktop and mobile
const noButton = document.getElementById("noButton");

if (isMobileDevice()) {
    noButton.addEventListener("touchstart", moveButton);
    noButton.addEventListener("click", moveButton);
} else {
    noButton.addEventListener("mouseover", moveButton);
    noButton.addEventListener("click", moveButton);
}

// Floating hearts appearing randomly 💖
setInterval(() => {
    createHeart(false);
}, 700);

// Function to create floating hearts
function createHeart(isExplosion) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.classList.add("heart");

    // Random position for hearts
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";

    // Explosion effect when "Yes" is clicked
    if (isExplosion) {
        heart.style.fontSize = Math.random() * 50 + 20 + "px";
        heart.style.position = "absolute";
        heart.style.left = `${window.innerWidth / 2}px`;
        heart.style.top = `${window.innerHeight / 2}px`;
        heart.style.transform = `translate(${Math.random() * 400 - 200}px, ${Math.random() * 400 - 200}px)`;
        heart.style.opacity = "1";
        heart.style.transition = "all 1s ease-out";
    } else {
        heart.style.animationDuration = Math.random() * 5 + 3 + "s";
    }

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
