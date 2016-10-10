var app = angular.module('myapp');

app.controller('MembersAreaCtrl', function ($scope, $timeout, $mdSidenav, $cookieStore,$cookies,$location) {

    $scope.userName = $cookies.get("uname");
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
        return function() {
            $mdSidenav(componentId).toggle();
        }
    }

    $scope.item = ['ahgdhg','bdsacvsaa','cdsvasdvcds','dvdsavasdvsd','evdsvsavd','fsdvavsavds','h','g','j','y'];

    $scope.OnLogout = function() {

        var cookies = $cookies.getAll();
        console.log(cookies);
        angular.forEach(cookies, function (v, k) {
            $cookies.remove(k);
        });
        $location.path('/');

    }
});