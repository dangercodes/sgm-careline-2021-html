// Function Carousel Home
$('.carousel-home').slick({
    dots: true,
    prevArrow: "<button class='slick-prev' aria-label='Previous' type='button'></button>",
    nextArrow: "<button class='slick-next' aria-label='Next' type='button'></button>",
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
});

// Function dropdown FAQ
$('.box-head-faq').click(function(){
    if($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).parent().find(".box-content-faq").removeClass('show');
    } else {
        $('.box-content-faq').removeClass('show');
        $('.box-head-faq').removeClass('active');
        $(this).addClass('active');
        $(this).parent().find(".box-content-faq").addClass('show');
    }
    
    
});

// Function Carousel Kuliah WhatsApp
$('.carousel-kuliah-whatsapp').slick({
    dots: false,
    prevArrow: "<button class='slick-prev' aria-label='Previous' type='button'></button>",
    nextArrow: "<button class='slick-next' aria-label='Next' type='button'></button>",
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 1,
            dots: true,
            }
        }
    ]
});

// Function Carousel Stories
$('.carousel-stories').slick({
    dots: true,
    prevArrow: false,
    nextArrow: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 769,
            settings: {
            slidesToShow: 2.5,
            dots: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 1.2,
            dots: true,
            }
        }
    ]
});

// Function ShowHide Live Chat
$('.chat-careline--button').click(function(){
    $(this).parent().find('.field').toggleClass('show');
});