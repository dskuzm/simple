//sticky-header

$(window).scroll(function () {
    if ($(window).scrollTop() >= 1 ) {
      $('header').addClass('sticky-header');
    }
    else {
      $('header').removeClass('sticky-header');
    }
});


//----burger-menu----

$(function () {
    $('.burger-icon').click(function () {
            $('body').toggleClass('nav-open');
        })
        , $('nav a').click(function () {
            $('body').removeClass('nav-open');
        });
});


//----hero--slider----

$('.hero-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [{
            breakpoint: 768,
        settings: {
                arrows: false,
                dots: true
            }
    }
  ]
});


//hover

$(function () {
    $('.services-item button').hover(function () {
        $(this).closest('.services-item').find('.services-item-top h4').css('background-color', '#49cbcd');
    }, function () {
        $(this).closest('.services-item').find('.services-item-top h4').css('background-color', '#485460');
    });
});


//----scroll----

$(document).ready(function () {
    $('nav ul a').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });
});
//end-scroll
