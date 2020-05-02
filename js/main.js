$(function() {


    $('.header__slider').slick({
        infinite: true,
        // fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        // mobileFirst: true,

        nextArrow: '<img src="img/arrow-right.svg" class="slider-arrows slider-arrows__right"> </img>',
        prevArrow: '<img src="img/arrow-left.svg" class="slider-arrows slider-arrows__left"></img>',
        asNavFor: '.slider-dots',
    })
    $('.slider-dots').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        focusOnSelect: true,
    });

    $('.surf_slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<img src="img/arrow-right.svg" class="slider-arrows slider-arrows__right"> </img>',
        prevArrow: '<img src="img/arrow-left.svg" class="slider-arrows slider-arrows__left"></img>',
        asNavFor: '.slider-map',
        focusOnSelect: true,
    });
    $('.slider-map').slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf_slider',
        focusOnSelect: true,

    });
    $('.section-slider').slick({
        infinite: true,
        nextArrow: '<img src="img/arrow-right.svg" class="slider-arrows slider-arrows__right"> </img>',
        prevArrow: '<img src="img/arrow-left.svg" class="slider-arrows slider-arrows__left"></img>',
        asNavFor: '.section-info',
        focusOnSelect: true,
        swipe: true,
    });
    $('.section-info').slick({
        infinite: true,
        asNavFor: '.section-slider',
        focusOnSelect: true,
        arrows: false,
    });

    // $('.shop-slider').slick({
    //         infinite: true,
    //         nextArrow: '<img src="img/arrow-right.svg" class="slider-arrows slider-arrows__right"> </img>',
    //         prevArrow: '<img src="img/arrow-left.svg" class="slider-arrows slider-arrows__left"></img>',
    //         focusOnSelect: true,
    //     })
    // $(".surfboard-box__circle").click(function(event) {

    //     $(this).toggleClass("move");

    // })

});