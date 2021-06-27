let index = 0;
showSlide();
function showSlide() {
    let i ;
    let slides = document.getElementsByClassName('slideShow');
    let dot = document.getElementsByClassName('dot');

    for( i = 0 ; i < slides.length ; i++){
        slides[i].style.display = "none";
    }
    index ++;

    if(index > slides.length){ index = 1}
    for( i = 0 ; i < dot.length ; i++){
        dot[i].className = dot[i].className.replace(" active-img","");
    }
    slides[index - 1].style.display = "block";
    dot[index - 1].className += " active-img";
    setTimeout(showSlide,10000);
}

