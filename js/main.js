$(function () {
    // Preloader
    var $preloader = $('#page-preloader'),
        $spinner = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');

    // Menu opener hamburger
    $('.menu-open, .menu a').click(function () {
        $('.menu-collapse').toggleClass('d-none order');
        $('.menu').toggleClass('menu-opened');
    });

    // Слайдер
    if ($('#slider').length) {
        $('.slider').slick({
            dots: true,
            infinite: false,
            autoplay: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        });
    }
    
});
