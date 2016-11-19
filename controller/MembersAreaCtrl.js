var app = angular.module('myapp');

app.controller('MembersAreaCtrl', function ($scope,$http, $timeout, $mdSidenav, $cookieStore,$cookies,$location,$routeParams) {

    // Retrieving the cookies values

    $scope.userName = $cookies.get("uname");
    $scope.usersName = $cookies.get("name");
    $scope.userCompanyName = $cookies.get("cname");
    $scope.userMobile = $cookies.get("mobile");
    $scope.userAddress = $cookies.get("address");

    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    $scope.onpage = "profile";
    $scope.mysale = function () {
        $scope.onpage = "mysale";
    };
    $scope.Home = function () {
        $scope.onpage = "home";
    };
    $scope.profile = function () {
        $scope.onpage = "profile";
    };
    $scope.message = function () {
        $scope.onpage = "message";
    };

    $scope.back = function () {
        $scope.onpage = "home";
    };
    
    var id1 = $routeParams.id;
    $scope.role1 = $routeParams.role;

    if ($scope.role1 == 1) {
        $scope.role = true;
    } else {
        $scope.role = false;
    }
    console.log(id1);
    console.log($scope.role1);


    function buildToggler(componentId) {
        return function() {
            $mdSidenav(componentId).toggle();
        }
    }

    $scope.item = ['ahgdhg','bdsacvsaa','cdsvasdvcds','dvdsavasdvsd','evdsvsavd','fsdvavsavds','h','g','j','y'];


    var role = {"role1": $scope.role1};


    $http({
        method: 'POST',
        url: 'http://www.ctex.16mb.com/Request.php',
        data: role,
        headers: {'Content-Type': 'application/x-www-form-unlencoded'}
    })
        .success(function (data) {

            if (data) {
               $scope.item = data;
                console.log($scope.item);
            } else {
                
                console.log("wrong");
                
            }
        })
        .error(function (data) {
            alert("error");
        });

    $http({
        method: 'POST',
        url: 'http://www.ctex.16mb.com/Trending.php',
        data: null,
        headers: {'Content-Type': 'application/x-www-form-unlencoded'}
    })
        .success(function (data) {

            if (data) {
                $scope.trending = data;
                
            } else {

                console.log("wrong");

            }
        })
        .error(function (data) {
            alert("error");
        });

    $http({
        method: 'POST',
        url: 'http://www.ctex.16mb.com/Material.php',
        data: null,
        headers: {'Content-Type': 'application/x-www-form-unlencoded'}
    })
        .success(function (data) {

            if (data) {
                $scope.material = data;

            } else {

                console.log("wrong");

            }
        })
        .error(function (data) {
            alert("error");
        });

    $scope.onLogout = function () {

        var cookies = $cookies.getAll();
        console.log(cookies);
        angular.forEach(cookies, function (v, k) {
            $cookies.remove(k);
        });
        $location.path('/');

    };

});

