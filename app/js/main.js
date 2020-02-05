$(function() {
    $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
        '<img class="slider-arrows slider-arrows-left" src="img/arrows-left.svg" alt="go prev">',
    nextArrow:
        '<img class="slider-arrows slider-arrows-right" src="img/arrows-right.svg" alt="go next">',
    asNavFor: ".slider-dotshead"
    });

    $(".slider-dotshead").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: ".header__slider",
        responsive: [
            {
                breakpoint: 961,
                settings: 'unslick'
            }
        ]
    });

    $(".serf-slider").slick({
        // centerMode: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:
        '<img class="slider-arrows slider-arrows-left" src="img/arrows-left.svg" alt="go prev">',
        nextArrow:
        '<img class="slider-arrows slider-arrows-right" src="img/arrows-right.svg" alt="go next">',
        asNavFor: ".slider-map",
        responsive: [
            {
                breakpoint: 1210,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true
                }
            },
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true
                }
            },
            {
                breakpoint: 661,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true
                }
            },
            {
                breakpoint: 661,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false
                }
            },

        ]
    });

    $(".slider-map").slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: ".serf-slider",
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 961,
                settings: 'unslick'
            }
        ]
    });

    $(".holder__slider").slick({
        infinite: true,
        fade: true,
        prevArrow:
        '<img class="slider-arrows slider-arrows-left" src="img/arrows-left.svg" alt="go prev">',
        nextArrow:
        '<img class="slider-arrows slider-arrows-right" src="img/arrows-right.svg" alt="go next">'
    });

    $(".shop__slider").slick({
        infinite: true,
        fade: true,
        prevArrow:
        '<img class="slider-arrows slider-arrows-left" src="img/arrows-left.svg" alt="go prev">',
        nextArrow:
        '<img class="slider-arrows slider-arrows-right" src="img/arrows-right.svg" alt="go next">'
    })

    $(
        '<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="../img/plus.svg"></div><div class="quantity-button quantity-down"><img src="../img/minus.svg"></div></div>'
    ).insertAfter(".quantity input");

    $(".quantity").each(function() {
        var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find(".quantity-up"),
        btnDown = spinner.find(".quantity-down"),
        min = input.attr("min"),
        max = input.attr("max");

        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });

    $('.surfboard__circle').on('click', function() {
        $(this).toggleClass('active');
    })

    $('.menu-btn').on('click', function() {
        $('.menu').toggleClass('active');
    })
});
