function yesAnswer() {
    const popup = document.getElementById("popup");
    popup.classList.add("show");

    // Play romantic music
    document.getElementById("loveSong").play();

    // Create floating hearts everywhere
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.classList.add("heart");
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = Math.random() * window.innerHeight + "px";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Function to move the "No" button
function moveButton() {
    const noButton = document.getElementById("noButton");
    const maxWidth = window.innerWidth - noButton.offsetWidth - 40;
    const maxHeight = window.innerHeight - noButton.offsetHeight - 40;

    let speed = window.innerWidth < 600 ? 0.1 : 0.3; 

    let x = Math.random() * maxWidth;
    let y = Math.random() * maxHeight;

    x = Math.max(20, Math.min(x, maxWidth));
    y = Math.max(20, Math.min(y, maxHeight));

    noButton.style.transitionDuration = `${speed}s`; 
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

// Detect if it's a mobile device
function isMobileDevice() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

// Attach event listeners
const noButton = document.getElementById("noButton");

if (isMobileDevice()) {
    noButton.addEventListener("touchstart", moveButton);
} else {
    noButton.addEventListener("mouseover", moveButton);
}

// Floating hearts appearing randomly
setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.classList.add("heart");
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";
    heart.style.animationDuration = Math.random() * 5 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => { heart.remove(); }, 5000);
}, 1000);
