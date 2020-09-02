let slideIndex = 1;
showSlides(slideIndex);

function slides(num) {
    showSlides(slideIndex += num)
}

function showSlides (ind){
    let devSection = document.getElementsByClassName("sec");
    if (ind > devSection.length) {slideIndex = 1}
    if (ind < 1) {slideIndex = devSection.length}
    for (let i = 0; i < devSection.length; i++) {
        devSection[i].style.display = "none";
    }
    devSection[slideIndex - 1].style.display = "block"; 
}
    