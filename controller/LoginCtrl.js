var app = angular.module('myapp');

app.controller("LoginCtrl",["$scope","$http","$location","$timeout","$mdDialog",function ($scope,$http,$location,$timeout,$mdDialog) {

    $scope.isloaded = false;
    console.log("welocme");
    $scope.user = {};
    $scope.OnLogin = function() {

        console.log($scope.user);
        
        var u1 = $scope.user.Username;
        var p1 = $scope.user.Password;
        console.log(u1);
        console.log(p1);

          if (u1 == null || p1 == null )  {
             console.log("empty");
             $scope.message = "One Or More Field Empty!!!";
         } else {

             $http({
                 method: 'POST',
                 url: 'http://www.ctex.16mb.com/Login.php',
                 data: $scope.user,
                 headers: {'Content-Type': 'application/x-www-form-unlencoded'}
                 })
                 .success(function (data) {

                 if (data.success) {
                     $scope.message = data.message;
                     console.log(data.message);
                 } else {
                     $scope.message = data.message;
                     console.log($scope.message);
                     }
                 })
                 .error(function (data) {
                 alert("error");
             });
         };
    }
   $timeout(function () {
        $scope.isloaded = true;
    }, 2500);

   

}]);