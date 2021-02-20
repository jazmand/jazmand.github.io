const menuToggle = document.querySelector('.toggle')
const logo = document.querySelector('.logo')
const showcase = document.querySelector('.showcase')
const icon = document.querySelector('.fa-bars')
const aboutMenu = document.querySelector('.aboutMenu')

menuToggle.addEventListener('click', () => {
    showcase.classList.toggle('active')
    icon.classList.toggle('fa-hamburger')
    menuToggle.classList.toggle('toggleBlack')
});

logo.addEventListener('click', () => {
    window.scrollTo(0, 0);
});


