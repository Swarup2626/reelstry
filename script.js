const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const responseDiv = document.getElementById("response");
const audio = document.getElementById("loveAudio");

// Move "No" button randomly
noBtn.addEventListener("mouseover", () => {
    const x = Math.floor(Math.random() * window.innerWidth - 100);
    const y = Math.floor(Math.random() * window.innerHeight - 50);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Handle "Yes" button click
yesBtn.addEventListener("click", () => {
    responseDiv.classList.remove("hidden");

    // Try playing audio
    audio.play().catch(() => {
        alert("Allow audio in your browser or try clicking again.");
    });
});
