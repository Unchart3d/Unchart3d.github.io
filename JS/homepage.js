let currentPic = 0;
let autoPic;
const pics = document.querySelector('.previousProjectsContainer');

function showPic(index) {
    const totalPics = pics.children.length
    if (index >= totalPics) {
        currentPic = 0;
    }
    if (index < 0) {
        currentPic = totalPics - 1;
    }
    pics.style.transform = `translateX(-${currentPic * 100}%)`;
}

function nextPic() {
    currentPic++;
    showPic(currentPic);
}

function startAutoPic() {
    autoPic = setInterval(nextPic, 3000);
}

function stopAutoPic() {
    clearInterval(autoPic);
}

startAutoPic();

const previousProjects = document.querySelector('.previousProjects')

previousProjects.addEventListener('mouseenter',stopAutoPic);

previousProjects.addEventListener('mouseleave',startAutoPic);