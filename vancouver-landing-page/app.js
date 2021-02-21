const toggleOpen = document.querySelector('.toggle')
const toggleClose = document.querySelector('.toggleClose')
const logo = document.querySelector('.logo')

toggleOpen.addEventListener('click', () => {
    document.getElementById("sideNav").style.width = "250px";
});

toggleClose.addEventListener('click', () => {
    document.getElementById("sideNav").style.width = "0";
});

logo.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

window.onscroll = function(){
    const header = document.getElementById('header')
    const oldColor = header.style.backgroundColor;
    const top = window.pageYOffset || document.documentElement.scrollTop;
    if (top > 100) {
        header.classList.add("backgroundToggle")
    } else {
        header.classList.remove("backgroundToggle")
    }
    };