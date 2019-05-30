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
    };
});