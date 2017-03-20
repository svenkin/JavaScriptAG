noteApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'www/login/login.html',
            controller: 'loginCtrl'
        })
        .state('note', {
            url: '/note',
            templateUrl: 'www/note/note.html',
            controller: 'noteCtrl'
        });
});