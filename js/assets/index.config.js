angular 
    .module('app')
    .config( function($routeProvider) {
        $routeProvider
            .when("/teste", {
                templateUrl : "teste.html"
        })
        
    })