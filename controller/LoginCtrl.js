var app = angular.module('myapp');

app.controller("LoginCtrl",["$scope","$http","$location","$timeout","$mdDialog","$mdToast","$cookieStore",function ($scope,$http,$location,$timeout,$mdDialog,$mdToast,$cookieStore) {

    $scope.isloaded = false;
    console.log("welocme");
    $scope.user = {};
    $scope.user.Username = "abc@a.com";
    $scope.user.Password = "abc";
    var last = {
        bottom: false,
        top: true,
        left: false,
        right: true
    };
    $scope.toastPosition = angular.extend({},last);
    $scope.getToastPosition = function() {
        sanitizePosition();
        return Object.keys($scope.toastPosition)
            .filter(function(pos) { return $scope.toastPosition[pos]; })
            .join(' ');
    };
    function sanitizePosition() {
        var current = $scope.toastPosition;
        if ( current.bottom && last.top ) current.top = false;
        if ( current.top && last.bottom ) current.bottom = false;
        if ( current.right && last.left ) current.left = false;
        if ( current.left && last.right ) current.right = false;
        last = angular.extend({},current);
    }

    

    $scope.OnLogin = function() {

        console.log($scope.user);

        var u1 = $scope.user.Username;
        var p1 = $scope.user.Password;
        console.log(u1);
        console.log(p1);

            var toast = function(abc){
                var pinTo = $scope.getToastPosition();
                $mdToast.show(
                    $mdToast.simple()
                        .content(abc)
                        .position(pinTo )
                        .hideDelay(2000)
                );

            };
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
                     console.log(data);
                     var id = data.id;
                     var role = data.role;
                     $cookieStore.put('uname', u1);
                     
                     console.log(data.message);
                     toast($scope.message);
                     $location.path('/Dashboard/' + id + '/' + role);
                 } else {
                     $scope.message = data.message;
                     console.log($scope.message);
                     toast($scope.message);
                     }
                 })
                 .error(function (data) {
                 alert("error");
             });
          }
    };
   $timeout(function () {
        $scope.isloaded = true;
    }, 2500);

   

}]);