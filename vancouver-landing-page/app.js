// header background color change
window.onscroll = () =>{
    const header = document.getElementById('header');
    if (window.pageYOffset > 10) {
        header.classList.add("backgroundToggle")
    } else {
        header.classList.remove("backgroundToggle")
    }
};

// open menu
document.querySelector('.toggle').addEventListener('click', () => {
    document.getElementById("sideNav").style.width = "250px";
});

// close menu
document.querySelector('.toggleClose').addEventListener('click', () => {
    document.getElementById("sideNav").style.width = "0";
});

// scroll to top logo
document.querySelector('.logo').addEventListener('click', () => {
    window.scrollTo(0, 0);
});


// // Learn more scroll
// document.querySelector('.learnMore').addEventListener('click', () => {
//     document.getElementById('about').scrollIntoView();
// });

// // menu click scrolling
// document.querySelector('.aboutMenu').addEventListener('click', () => {
//     document.getElementById('about').scrollIntoView();
// });

// document.querySelector('.exploreMenu').addEventListener('click', () => {
//     document.getElementById('explore').scrollIntoView();
// });

// document.querySelector('.contactMenu').addEventListener('click', () => {
//     document.getElementById('contact').scrollIntoView();
// });


// learn more scroll with offset
document.querySelector('.learnMore').addEventListener('click', () => {
    const offset = 30;
    const element = document.getElementById('about');
    const elementPosition = element.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
    const finalPosition = elementPosition - offset;
    window.scrollTo({
    top: finalPosition,
    });
});

// menu click scrolls with offset
document.querySelector('.aboutMenu').addEventListener('click', () => {
    const offset = 30;
    const element = document.getElementById('about');
    const elementPosition = element.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
    const finalPosition = elementPosition - offset;
    window.scrollTo({
    top: finalPosition,
    });
});

document.querySelector('.exploreMenu').addEventListener('click', () => {
    const offset = 78;
    const element = document.getElementById('explore');
    const elementPosition = element.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
    const finalPosition = elementPosition - offset;
    window.scrollTo({
    top: finalPosition,
    });
});

document.querySelector('.contactMenu').addEventListener('click', () => {
    const offset = 70;
    const element = document.getElementById('contact');
    const elementPosition = element.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
    const finalPosition = elementPosition - offset;
    window.scrollTo({
    top: finalPosition,
    });
});


// slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {
    slideIndex = 1
}
if (n < 1) {
    slideIndex = slides.length
}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}














