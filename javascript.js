//navigation become white when scrolling....
$(window).scroll(function() {
    if ($(window).width() < 992){
        if ($(window).scrollTop() > 50) {
            $('nav').addClass('w3-white w3-card-4');
            $('#navbarCollapse').removeClass('w3-white w3-card-4');
        } else {
            $('nav').removeClass('w3-white w3-card-4');
            $('#navbarCollapse').addClass('w3-white w3-card-4');

        }
    } else {
        if ($(window).scrollTop() > 50) {
            $('nav').addClass('w3-white w3-card-4');
            $('#navbarCollapse').removeClass('w3-white w3-card-4');
        } else {
            $('nav').removeClass('w3-white w3-card-4');
        }
    }
});

if($(window).width() < 991) {
    $('#navbarCollapse').addClass('w3-white w3-card-4');
} else {
    $('#navbarCollapse').removeClass('w3-white w3-card-4');

}




//
var $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    return false;
});