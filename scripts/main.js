$(document).ready(function(){
    $('#button').click(function(){
        $('html,body').animate({
            scrollTop: $('#contact').offset().top
        }, 500);
    });
});