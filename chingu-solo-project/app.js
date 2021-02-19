const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')
const icon = document.querySelector('.fa-bars')


menuToggle.addEventListener('click', () => {
    showcase.classList.toggle('active')
    icon.classList.toggle('fa-hamburger')
    menuToggle.classList.toggle('toggleBlack')
});


