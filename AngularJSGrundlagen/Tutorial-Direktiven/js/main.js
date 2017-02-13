var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.firstName= 'John';
	$scope.names= [
		{name:'Jani',country:'Norway'},
		{name:'Hege',country:'Sweden'},
		{name:'Kai',country:'Denmark'}
		];
});