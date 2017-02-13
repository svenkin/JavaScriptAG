var app = angular.module('myLoginApp', []);

app.controller('loginCtrl', function($scope) {
    $scope.username = '';
    $scope.password = '';

    $scope.ausgabe = '';

    $scope.users = [
        {name: 'Hans', password: 'test'},
        {name: 'Peter', password: 'test'}
    ];

    $scope.doCheck =  function() {
        var found = false;

        angular.forEach($scope.users, function(name) {
            if ($scope.username === name.name) found = true;
        });

        if (!found) {
            $scope.users.push({
                name: $scope.username,
                password: $scope.password
            });
            $scope.ausgabe = 'Benutzer konnte dem Array hinzugefügt werden!';
        } else {
            $scope.ausgabe = 'Benutzer ist schon vorhanden!';
        }

        $scope.logUsersArray();
    };

    $scope.logUsersArray = function() {
        console.log($scope.users);
    };

    $scope.doShowUsers =  function() {
        $scope.counter++;
    };
});
