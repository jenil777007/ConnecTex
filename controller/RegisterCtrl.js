var app = angular.module('myapp');

app.controller("RegisterCtrl",["$scope","$http","$location","$mdDialog",function ($scope,$http,$location,$mdDialog) {

    console.log("welocme");
    $scope.user = {};
    $scope.OnRegister= function() {
        $location.path('/Next');
    }

   
}]);