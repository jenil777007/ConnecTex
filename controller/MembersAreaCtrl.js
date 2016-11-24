var app = angular.module('myapp');

app.controller('MembersAreaCtrl', function ($scope,$http, $timeout, $mdSidenav, $cookieStore,$cookies,$location,$routeParams) {

    // Retrieving the cookies values
    $scope.msg = {};
    $scope.crequest = {};

    $scope.userName = $cookies.get("uname");
    $scope.usersName = $cookies.get("name");
    $scope.userCompanyName = $cookies.get("cname");
    $scope.userMobile = $cookies.get("mobile");
    $scope.userAddress = $cookies.get("address");

    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    $scope.toggle = false;

    $scope.onpage = "home";
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
    $scope.idval = id1;
    console.log($scope.idval);
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

    // $scope.item = ['ahgdhg','bdsacvsaa','cdsvasdvcds','dvdsavasdvsd','evdsvsavd','fsdvavsavds','h','g','j','y'];


    var role = {"role1": $scope.role1};
    var idval = {"id": $scope.idval};

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

    $http({
        method: 'POST',
        url: 'http://www.ctex.16mb.com/UserSaleInfo.php',
        data: idval,
        headers: {'Content-Type': 'application/x-www-form-unlencoded'}
    })
        .success(function (data) {

            if (data) {
                $scope.item2 = data;
                console.log($scope.item2);
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

    $scope.showNotifications = function () {

        $scope.toggle = !$scope.toggle;

    };

    $http({
        method: 'POST',
        url: 'http://www.ctex.16mb.com/FetchCompanyName.php',
        data: null,
        headers: {'Content-Type': 'application/x-www-form-unlencoded'}
    })
        .success(function (data) {

            if (data) {
                $scope.name = data;

            } else {

                console.log("wrong");

            }
        })
        .error(function (data) {
            alert("error");
        });


    $scope.sendMessage = function () {

        $scope.msg.senderid = id1;
        $scope.msg.date = new Date();

        console.log($scope.msg);
        $http({
            method: 'POST',
            url: 'http://www.ctex.16mb.com/SendMessage.php',
            data: $scope.msg,
            headers: {'Content-Type': 'application/x-www-form-unlencoded'}
        })
            .success(function (data) {

                if (data) {
                    $scope.feedback = data;
                    console.log($scope.feedback);

                } else {

                    console.log("wrong");

                }
            })
            .error(function (data) {
                alert("error");
            });
    };

    $http({
        method: 'POST',
        url: 'http://www.ctex.16mb.com/GetMessage.php',
        data: idval,
        headers: {'Content-Type': 'application/x-www-form-unlencoded'}
    })
        .success(function (data) {

            if (data) {
                $scope.rmsg = data;

            } else {

                console.log("wrong");

            }
        })
        .error(function (data) {
            alert("error");
        });

    $scope.addSale = function () {

        $scope.crequest.id = id1;
        $scope.crequest.date = new Date();
        console.log($scope.crequest);

        $http({
            method: 'POST',
            url: 'http://www.ctex.16mb.com/MakeDeal.php',
            data: $scope.crequest,
            headers: {'Content-Type': 'application/x-www-form-unlencoded'}
        })
            .success(function (data) {

                if (data) {
                    $scope.added = data;
                    console.log($scope.added);

                } else {

                    console.log("wrong");

                }
            })
            .error(function (data) {
                alert("error");
            });
    };
    
});
