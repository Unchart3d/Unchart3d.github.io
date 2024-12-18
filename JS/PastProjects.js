let slideIndex = [1,1,1,1,1,1,1,1];
let slideId = ["project-card", "project-card-1", "project-card-4",
    "project-card-5", "project-card-8", "project-card-10", "project-card-14", "project-card-15"]
showSlides(1,0);
showSlides(1,1);
showSlides(1,2);
showSlides(1,3);
showSlides(1,4);
showSlides(1,5);
showSlides(1,6);
showSlides(1,7);

function plusSlides(n,no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n,no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);

    if(n > x.length) {slideIndex[no] = 1;}
    if(n < 1) {slideIndex[no] = x.length}

    for(i=0;i<x.length;i++) {
        x[i].style.display = "none";
    }

    x[slideIndex[no]-1].style.display = "block";
}