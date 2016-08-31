var app = angular.module('myapp');

app.controller("RegisterCtrl",["$scope","$http","$location","$mdDialog","$mdToast",function ($scope,$http,$location,$mdDialog,$mdToast) {

    console.log("welcome");
    $scope.user = {};

        $scope.status = '';
        $scope.items = [1, 2, 3, 4, 5];
        $scope.showAlert = function (ev) {
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#dialogContainer')))
                    .clickOutsideToClose(true)
                    .title('TutorialsPoint.com')
                    .textContent('Welcome to TutorialsPoint.com')
                    .ariaLabel('Welcome to TutorialsPoint.com')
                    .ok('Ok!')
                    .targetEvent(ev)
            );
        };
    

    $scope.myvar = true;
    $scope.OnNext= function() {
        console.log($scope.user);
        $scope.user.name=$scope.user.fname +" "+ $scope.user.lname;
        $scope.myvar = !$scope.myvar;
        console.log($scope.myvar);
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
        var final = angular.merge($scope.user,$scope.user1);
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