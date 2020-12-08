$(document).ready(function() {
    $('.flip-container .flipper').click(function() {
        $(this).closest('.flip-container').toggleClass('click');
        $(this).css('transform, rotateY(180deg)');
    });
});    

AOS.init({
    easing: 'ease',
    duration: 1800
});

