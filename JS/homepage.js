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


let current = 0;
let auto;
const pic = document.querySelector('.currentProjectsContainer');

function show(index) {
    const totalPics = pic.children.length
    if (index >= totalPics) {
        current = 0;
    }
    if (index < 0) {
        current = totalPics - 1;
    }
    pic.style.transform = `translateX(-${current * 100}%)`;
}

function next() {
    current++;
    show(current);
}

function startAuto() {
    auto = setInterval(next, 3000);
}

function stopAuto() {
    clearInterval(auto);
}

startAuto();

const currentProjects = document.querySelector('.currentProjects')

currentProjects.addEventListener('mouseenter',stopAuto);

currentProjects.addEventListener('mouseleave',startAuto);