$(function () {

    $(".menu a, header a, footer a").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });



    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('.arrow__top-img').fadeIn(2000);
        } else {
            $('.arrow__top-img').fadeOut();
        }
    });
    $('.arrow__top-img').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });



    $('.menu__burger').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
    });



    $('.blog__slider-items').slick({
        arrows: false,
        dots: true,
    });



    var mixer = mixitup('.gallery__content');



});
