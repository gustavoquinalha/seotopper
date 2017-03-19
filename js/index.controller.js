angular
    .module('app')
    .controller('IndexController', function($scope, Seo) {
    $scope.seo = {};
    $scope.salvar = function(seo) {
        Seo.salvar($scope.seo);
        $scope.seo = {};
        console.log("LOG PROD ======"+JSON.stringify(Seo.getSeos(), null, 3)+"======");
    }

    $scope.seos = Seo.seos;
})
