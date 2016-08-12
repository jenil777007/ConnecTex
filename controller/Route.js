var app = angular.module("myapp",['ngRoute','ngMaterial']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl : 'html_pages/Login.html',
            controller: 'LoginCtrl'
        })
        .otherwise({
            redirectTo : '/'
        });
});
