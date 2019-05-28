$(document).ready(function() {
    setTimeout(function() {
        $('.awards-slide').slick({
            infinite: false,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 3,
             responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        initialSlide: 1,
                        slidesToScroll: 3,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        initialSlide: 1,
                        slidesToScroll: 2,
                        dots: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        initialSlide: 1,
                        slidesToScroll: 1,
                        dots: true,
                    }
              }
            ]
        });
    }, 300)
})