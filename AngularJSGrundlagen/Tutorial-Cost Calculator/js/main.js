var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.quantity= 1;
    $scope.price= 5;
});