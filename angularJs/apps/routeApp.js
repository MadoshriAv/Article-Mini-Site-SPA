var app = angular.module("routeApp", ["ngRoute", "ngAnimate"]);
    app.config(function($routeProvider,$locationProvider) {

    $routeProvider
    .when("/", {
        templateUrl : 'angularJs/Include/welcome.html',
        animation: 'welcome'
    })
    .when("/red", {
        templateUrl : 'angularJs/Include/tourNews.html',
        animation: 'second'
    })
    .when("/green", {
        templateUrl : 'angularJs/Include/sportNews.html',
        animation: 'second'
    })
    .when("/blue", {
        templateUrl : 'angularJs/Include/fullMariha.html',
        animation: 'welcome'
    })
    .when("/blue1", {
        templateUrl : 'angularJs/Include/fullKim.html',
        animation: 'welcome'
    })
    .when("/blue2", {
        templateUrl : 'angularJs/Include/fullIran.html',
        animation: 'welcome'
    })
    .when("/blue3", {
        templateUrl : 'angularJs/Include/fullSki.html',
        animation: 'welcome'
    })
    .when("/blue4", {
        templateUrl : 'angularJs/Include/fullJudo.html',
        animation: 'welcome'
    })
    .when("/blue5", {
        templateUrl : 'angularJs/Include/fullRugby.html',
        animation: 'welcome'
    })
    .when("/blue6", {
        templateUrl : 'angularJs/Include/fullFormula.html',
        animation: 'welcome'
    })
    .when("/blue7", {
        templateUrl : 'angularJs/Include/fullBrazil.html',
        animation: 'welcome'
    })
    .when("/blue8", {
        templateUrl : 'angularJs/Include/fullPuerto.html',
        animation: 'welcome'
    })
    .when("/lemon", {
        templateUrl : 'angularJs/Include/aboutUs.html',
        animation: 'first'
    })
    .when("/black", {
        templateUrl : 'angularJs/Include/Staff.html',
        animation: 'first'
    })
    .when("/white", {
        templateUrl : 'angularJs/Include/contactUs.html',
        animation: 'first'
    })
    .when("/yellow", {
        templateUrl : 'angularJs/Include/worldNews.html',
        animation: 'second'
    });
});