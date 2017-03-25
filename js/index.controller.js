angular
    .module('app')
    .controller('IndexController', function($scope, Seo) {
    $scope.seo = {};
    $scope.sv = true;
    $scope.salvar = function(seo) {
        Seo.salvar($scope.seo);
        $scope.seo = {};
        console.log("LOG PROD ======"+JSON.stringify(Seo.getSeos(), null, 3)+"======");
        Seo.janela();
    }

    $scope.remover = function(x) {
        Seo.remover(x);
    }

    $scope.ind = 0;
    $scope.editor = false;
    $scope.editando = function(x) {
        $scope.editor = true;
        $scope.sv = false;
        $scope.seo.title = $scope.seos[$scope.seos.indexOf(x)].title;
        $scope.seo.description = $scope.seos[$scope.seos.indexOf(x)].description;
        $scope.seo.author = $scope.seos[$scope.seos.indexOf(x)].author;
        $scope.seo.image = $scope.seos[$scope.seos.indexOf(x)].image;
        $scope.seo.canonical = $scope.seos[$scope.seos.indexOf(x)].canonical;
        $scope.seo.robots = $scope.seos[$scope.seos.indexOf(x)].robots;
        $scope.seo.name = $scope.seos[$scope.seos.indexOf(x)].name;
        $scope.seo.type = $scope.seos[$scope.seos.indexOf(x)].type;
        $scope.seo.appid = $scope.seos[$scope.seos.indexOf(x)].appid;
        $scope.seo.fbadmins = $scope.seos[$scope.seos.indexOf(x)].fbadmins;
        $scope.seo.ttcard = $scope.seos[$scope.seos.indexOf(x)].ttcard;
        $scope.seo.base = $scope.seos[$scope.seos.indexOf(x)].base;
        $scope.seo.loSeo.janela();cale = $scope.seos[$scope.seos.indexOf(x)].locale;
        $scope.seo.sitemap = $scope.seos[$scope.seos.indexOf(x)].sitemap;
        $scope.ind = $scope.seos.indexOf(x);
    }
    $scope.editar = function(x) {
        Seo.editar(x, $scope.ind);
        $scope.editor = false;
        $scope.sv = true;
        $scope.seo = {};
        Seo.janela();
    }

    $scope.seos = Seo.seos;

    $scope.ops = Seo.ops;
    $scope.rops = Seo.rops;
    $scope.tt = Seo.tt;

})
