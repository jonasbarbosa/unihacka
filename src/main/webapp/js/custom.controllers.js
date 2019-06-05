app.controller('HomeController', function($scope, $http) {
    $scope.photos = [];

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

    $http({
        method: "GET",
        url: 'https://www.instagram.com/explore/tags/unihacka/?__a=1'
    }).then(function mySuccess(response) {
        $scope.photos = response.data.graphql.hashtag.edge_hashtag_to_media.edges;
    }, function myError(response) {
        console.log(response)
    });
});

app.controller('ScrollController', function($scope, $location, $anchorScroll) {
    $scope.links = [
        {
            name: 'Como Funciona',
            href: 'how-work'
        }, 
        {
            name: 'O Desafio',
            href: 'challenge'
        }, 
        {
            name: 'Prêmios',
            href: 'awards'
        }, 
        {
            name: 'Local',
            href: 'local'
        }
    ];

    $scope.goToSection = (id) => {
        $("html, body").animate({ scrollTop: $(`#${id}`).offset().top - 100 }, 1000);

        $('.check-menu').prop('checked', false)
    };
});