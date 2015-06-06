var app = angular.module('myApp');


app.controller('mainCtrl', function($scope, $http){

    $scope.test = "test worked";

    $scope.album1 = function(){
        $scope.showalbum1 = true;
        $scope.showalbum2 = false;
    }

    $scope.album2 = function(){
        $scope.showalbum1 = false;
        $scope.showalbum2 = true;
    }








});
