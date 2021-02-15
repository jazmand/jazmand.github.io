$('.flip-container .flipper').click(function() {
	$(this).closest('.flip-container').toggleClass('hover');
    $(this).css('transform, rotateY(180deg)');
});

$('#arrow-up').click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
});

AOS.init({
    easing: 'ease',
    duration: 1800
});



