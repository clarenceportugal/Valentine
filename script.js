let moveSpeed = 0.3;
let clickCount = 0;

function yesAnswer() {
    const popup = document.getElementById("popup");
    popup.classList.add("show");

    document.getElementById("loveSong").play();

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createHeart(true);
        }, i * 50);
    }
}

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

    if (clickCount % 3 === 0) {
        moveSpeed = Math.max(0.05, moveSpeed - 0.05);
    }
}

function isMobileDevice() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

const noButton = document.getElementById("noButton");

if (isMobileDevice()) {
    noButton.addEventListener("touchstart", moveButton);
    noButton.addEventListener("click", moveButton);
} else {
    noButton.addEventListener("mouseover", moveButton);
    noButton.addEventListener("click", moveButton);
}

setInterval(() => {
    createHeart(false);
}, 700);

function createHeart(isExplosion) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.classList.add("heart");
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";

    if (isExplosion) {
        heart.style.transform = `translate(${Math.random() * 400 - 200}px, ${Math.random() * 400 - 200}px)`;
        heart.style.opacity = "1";
    } else {
        heart.style.animationDuration = Math.random() * 5 + 3 + "s";
    }

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
