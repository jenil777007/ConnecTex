var app = angular.module('myapp');

app.controller("LoginCtrl",["$scope","$http","$location","$timeout","$mdDialog","$mdToast","$cookieStore",function ($scope,$http,$location,$timeout,$mdDialog,$mdToast,$cookieStore) {

    $scope.isloaded = false;
    $scope.onpage = "login";
    
    $scope.user = {};
    $scope.user1 = {};
    $scope.user.Username = "nikhilsojitra0009@gmail.com";
    $scope.user.Password = "844e3ec00b011b120326834795314b71";

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

                     // Storing data values in to cookies
                     
                     $cookieStore.put('uname', u1);
                     $cookieStore.put('name', data.name);
                     $cookieStore.put('cname', data.company_name);
                     $cookieStore.put('mobile', data.mobile);
                     $cookieStore.put('address', data.address1);


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

    $scope.forgotpwd = function () {

        $scope.onpage = "update";


    };

    $scope.back = function () {

        $scope.onpage = "login";


    };


    $scope.OnNext = function () {

        var toast = function (abc) {
            var pinTo = $scope.getToastPosition();
            $mdToast.show(
                $mdToast.simple()
                    .content(abc)
                    .position(pinTo)
                    .hideDelay(2000)
            );

        };


        $http({
            method: 'POST',
            url: 'http://www.ctex.16mb.com/UpdateProfile.php',
            data: $scope.user1,
            headers: {'Content-Type': 'application/x-www-form-unlencoded'}
        })
            .success(function (data) {

                if (data.success) {
                    $scope.message = data.message;
                    console.log(data);

                    // Storing data values in to cookies


                    toast($scope.message);
                    $scope.onpage = "login";
                } else {
                    $scope.message = data.message;
                    console.log($scope.message);
                    toast($scope.message);
                }
            })
            .error(function (data) {
                alert("error");
            });


    };
    
   

}]);