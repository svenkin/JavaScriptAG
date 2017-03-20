noteApp.controller('noteCtrl', function($scope) {

    $scope.message = localStorage.getItem('note_message');


    $scope.save = function(){
        console.log('asdfa');
        localStorage.setItem('note_message', $scope.message);
    };

    $scope.delete= function(){
        localStorage.removeItem('note_message');
        $scope.message = '';
    };


});