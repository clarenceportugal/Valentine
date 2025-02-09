function yesAnswer() {
    const popup = document.getElementById("popup");
    popup.classList.add("show");

    // Play romantic music
    document.getElementById("loveSong").play();

    // Create floating hearts
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.classList.add("heart");
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

function moveButton() {
    const noButton = document.getElementById("noButton");
    const maxWidth = window.innerWidth - noButton.offsetWidth - 40;
    const maxHeight = window.innerHeight - noButton.offsetHeight - 40;

    let x = Math.random() * maxWidth;
    let y = Math.random() * maxHeight;

    x = Math.max(20, Math.min(x, maxWidth));
    y = Math.max(20, Math.min(y, maxHeight));

    noButton.style.left = ${x}px;
    noButton.style.top = ${y}px;
}

setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.classList.add("heart");
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = Math.random() * 5 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => { heart.remove(); }, 5000);
}, 1000);
