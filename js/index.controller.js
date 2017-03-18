angular
    .module('app')
    .controller('IndexController', function($scope, Produto) {
    $scope.prod = {};
    $scope.salvar = function(prod) {
        Produto.salvar($scope.prod);
        $scope.prod = {};
        console.log("LOG PROD ======"+JSON.stringify(Produto.getProdutos(), null, 3)+"======");
    }

    $scope.produtos = Produto.produtos;
})
