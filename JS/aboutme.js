document.getElementById('bubble-link').addEventListener('click', function(event) {
    event.preventDefault();
    createBubbleStorm();
});

function createBubbleStorm() {
    const bubbleContainer = document.querySelector('.bubble-container');

    const numberOfBubbles = 80;

    for (let i = 0; i < numberOfBubbles; i++) {
        createBubble(bubbleContainer);
    }
}

function createBubble(bubbleContainer) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');


    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
    const size = Math.random() * 40 + 30;
    const delay = Math.random() * 2;

    bubble.style.left = `${posX}px`;
    bubble.style.top = `${posY}px`;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.animationDelay = `${delay}s`;

    const floatDirection = Math.random() > 0.5 ? 1 : -1;
    const speed = Math.random() * 2 + 1;

    bubble.style.animationDuration = `${speed + 5}s`;

    const horizontalMovement = floatDirection * Math.random() * 50;
    bubble.style.transform = `rotate(${Math.random() * 360}deg) translateX(${horizontalMovement}px)`;

    bubbleContainer.appendChild(bubble);

    bubble.addEventListener('animationend', function() {
        bubble.remove();
    });
}
