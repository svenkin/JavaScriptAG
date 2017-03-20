var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            template: '<h1>Ich bin eine Überschrift</h1>'
            //templateUrl: 'partials/partial-home.html'
        })

        .state('about', {
            url: '/about',
            views: {
                // the main template will be placed here (relatively named)
                '': { templateUrl: 'partials/partial-about.html' }

            }

        });

});


routerApp.controller('scotchController', function($scope) {

    $scope.message = 'test';

    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];

});