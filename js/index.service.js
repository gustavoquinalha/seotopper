angular
    .module('app')
    .factory('Produto', function() {

    var Produto = {
        salvar: salvar,
        getProdutos: getProdutos,
        produtos: [

        ]
    };
    return Produto;

    function salvar(prod) {
        Produto.produtos.push(prod);
        console.log(JSON.stringify(prod, null, 3)+" --Inserido--> "+JSON.stringify(Produto.produtos, null, 3)+"===============");
    }

    function getProdutos(x) {
        console.log("LOG LISTA ====== "+JSON.stringify(Produto.produtos, null, 3)+" ===============");
        return Produto.produtos;
    }

});
