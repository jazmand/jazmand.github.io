$(document).ready(function() {
    $('.flip-container .flipper').click(function() {
        $(this).closest('.flip-container').toggleClass('click');
        $(this).css('transform, rotateY(180deg)');
    });

    // $('#arrow-up').on('click', function() {
    //     $('html, body').animate(keyframes: {
    //         scrollTop: 0
    //     }, options: 2000);
    // });

    AOS.init({
        easing: 'ease',
        duration: 1800
    });
});    