//----burger-menu----

$(function () {
    $('.burger-icon').click(function () {
        $('body').toggleClass('nav-open');
    }),
    $('.nav a').click(function () {
        $('body').removeClass('nav-open');
    });
});




//----hero--slider----

$('.hero-slider').slick({
    slidesToShow: 1
    , slidesToScroll: 1
    , arrows: true
    , dots: false
    , responsive: [ {
            breakpoint: 768
            , settings: {
                arrows: false
                , dots: true
            }
    }
  ]
});



//----scroll----

$(document).ready(function(){
    $('.goTo').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});
//end-scroll
