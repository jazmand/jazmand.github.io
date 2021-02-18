$(document).ready(function (){
    
    $('#aboutNav').click(function() {
        $("html, body").animate({scrollTop: $("#about").offset().top}, 1000);
    });
    $('#projectsNav').click(function() {
        $("html, body").animate({scrollTop: $("#projects").offset().top}, 1000);
    });
    $('#contactNav').click(function() {
        $("html, body").animate({scrollTop: $("#contact").offset().top}, 1000);
    });

    $(document).scroll(function() {
        if ($(this).scrollTop()>100)
            {
            $('#arrow-up').show(1000);
        }
        else
            {
            $('#arrow-up').hide(1000);
        }
    });

    $('#arrow-up').click(function() {
        $("html, body").animate({scrollTop: 0}, 1000);
    });  
    
    $('.flip-container .flipper').click(function() {
        $(this).closest('.flip-container').toggleClass('hover');
        $(this).css('transform, rotateY(180deg)');
    });    

    AOS.init({
        easing: 'ease',
        duration: 1800
    });
});

