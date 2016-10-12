var app = angular.module('myapp');

app.controller('MembersAreaCtrl', function ($scope,$http, $timeout, $mdSidenav, $cookieStore,$cookies,$location,$routeParams) {

    $scope.userName = $cookies.get("uname");
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    var id1 = $routeParams.id;
    console.log(id1);
    function buildToggler(componentId) {
        return function() {
            $mdSidenav(componentId).toggle();
        }
    }

    $scope.item = ['ahgdhg','bdsacvsaa','cdsvasdvcds','dvdsavasdvsd','evdsvsavd','fsdvavsavds','h','g','j','y'];

    $scope.onLogout = function() {

        var cookies = $cookies.getAll();
        console.log(cookies);
        angular.forEach(cookies, function (v, k) {
            $cookies.remove(k);
        });
        $location.path('/');

    };

    $http({
        method: 'POST',
        url: 'http://www.ctex.16mb.com/Material.php',
        data: null,
        headers: {'Content-Type': 'application/x-www-form-unlencoded'}
    })
        .success(function (data) {

            if (data) {
               $scope.item = data;
                console.log(data);
            } else {
                
                console.log("wrong");
                
            }
        })
        .error(function (data) {
            alert("error");
        });
});