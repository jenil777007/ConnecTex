var app = angular.module('myapp');

app.controller("RegisterCtrl",["$scope","$http","$location","$mdDialog","$mdToast",function ($scope,$http,$location,$mdDialog,$mdToast) {

    console.log("welcome");
   
    $scope.user = {};
    $scope.user.newsletter = 0;
        $scope.status = '';
        $scope.items = [1, 2, 3, 4, 5];
        $scope.showAlert = function (ev) {
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#dialogContainer')))
                    .clickOutsideToClose(true)
                    .title('Terms & Conditions')
                    .textContent('Welcome to TutorialsPoint.com')
                    .ariaLabel('ConnecTex Inc.')
                    .ok('I agree.')
                    .targetEvent(ev)
            );
        };
    

    $scope.myvar = 1;
    $scope.OnNext= function() {
        console.log($scope.user);
       // var fn = $scope.user.fname;
        //console.log(fn);

            $scope.user.name = $scope.user.fname + " " + $scope.user.lname;
        var pass = $scope.user.password;
        var cpass = $scope.user.cpassword;
        if (pass == cpass) {
            $scope.myvar = 2;
            console.log("success");
        }
        else {
            toast("Passwords are not match.....");
        }

    };

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

    var toast = function(abc){
        var pinTo = $scope.getToastPosition();
        $mdToast.show(
            $mdToast.simple()
                .content(abc)
                .position(pinTo )
                .hideDelay(2000)
        );

    };

    $scope.OnRegister= function() {

        $scope.myvar = 3;
        $scope.final1 = angular.merge($scope.user,$scope.user1);
        console.log($scope.final1);
    };

    $scope.Onotp= function() {
        $scope.myvar = 4;
        console.log($scope.user2);

        var final2 = $scope.user2;
        console.log(final2);
        
        $scope.final3 = angular.merge($scope.final1,final2);
        console.log($scope.final3);
        
        $http({
            method: 'POST',
            url: 'http://www.ctex.16mb.com/SendOtp.php',
            data: final2,
            headers: {'Content-Type': 'application/x-www-form-unlencoded'}
        })
            .success(function (data) {

                if (data.success) {
                    $scope.message = data.message;
                    console.log(data.message);
                    //toast($scope.message);

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

    $scope.Onconfirm= function() {
        console.log($scope.user3);
        
        var final = angular.merge($scope.final3,$scope.user3);
        console.log(final);
       
       $http({
            method: 'POST',
            url: 'http://www.ctex.16mb.com/Register.php',
            data: final,
            headers: {'Content-Type': 'application/x-www-form-unlencoded'}
        })
            .success(function (data) {

                if (data.success) {
                    $scope.message = data.message;
                    console.log(data.message);
                    toast($scope.message);
                    $location.path('/');

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

    }]);