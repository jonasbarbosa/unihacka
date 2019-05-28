$(document).ready(function() {
    setTimeout(function() {
        $('.awards-slide').slick({
            infinite: true,
            arrows: false,
            dots: true,
            initialSlide: 1,
            slidesToShow: 3,
            slidesToScroll: 3,
             responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
              }
            ]
        });
    }, 300)
})