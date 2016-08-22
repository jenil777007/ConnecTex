var app = angular.module('myapp');

app.controller("LoginCtrl",["$scope","$http","$location","$timeout",function ($scope,$http,$location,$timeout) {

    $scope.isloaded = false;
    console.log("welocme");
    $scope.user = {};
    $scope.OnLogin = function() {

        console.log("clicked student");
        console.log($scope.user);
        
        var u1 = $scope.user.username;
        var p1 = $scope.user.password;
        console.log(u1);
        console.log(p1);

        /*  if (u1 == null || p1 == null )  {
         console.log("empty");
         $scope.message = "One Or More Field Empty!!!";
         } else {

         $http({
         method: 'post',
         url: 'php/login.php',
         data: $scope.user,
         headers: {'Content-Type': 'application/x-www-form-unlencoded'}
         })
         .success(function (data) {
         if (data.success) {
         $rootScope.isloggedin = true;   //strore this varibale in cookie
         $scope.message = data.message;
         console.log(data.message);
         var type = data.type;
         console.log(data);
         $cookieStore.put('userobject',data);

         var accessToken = $scope.isloggedin;
         authFact.setAccessToken(accessToken);

         if(type == "Admin") {
         $location.path('/admin');
         }else if(type == "Teacher"){
         $location.path('/teacher');
         }else{
         $location.path('/student');
         }
         } else {
         $scope.message = data.message;
         console.log($scope.message);
         //alert(data.message);
         }
         })
         .error(function (data) {
         alert("error");
         });
         };*/
    }
   $timeout(function () {
        $scope.isloaded = true;
    }, 2500);

}]);