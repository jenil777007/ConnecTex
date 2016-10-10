var app = angular.module("myapp",['ngRoute','ngMaterial','ngCookies']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl : 'html_pages/Login.html',
            controller: 'LoginCtrl'
        })
        .when('/Register',{
            templateUrl : 'html_pages/Register.html',
            controller: 'RegisterCtrl'
        })
        .when('/Next',{
            templateUrl : 'html_pages/Next.html',
            controller: 'RegisterCtrl'
        })
        .when('/Dashboard',{
            templateUrl : 'html_pages/MembersArea.html',
            controller: 'MembersAreaCtrl'
        })
        .otherwise({
            redirectTo : '/'
        });
});
