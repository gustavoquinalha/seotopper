angular
    .module('app')
    .controller('IndexController', function ($scope, Seo) {
        $scope.seo = {};
        $scope.sv = true;


        $scope.jsonLdOptions = [
            {
                name: 'LocalBusiness',
                value: 'LocalBusiness'
            },
            {
                name: 'Person',
                value: 'person'
            },
            {
                name: 'Product',
                value: 'product'
            },
            {
                name: 'Event',
                value: 'event'
            },
            {
                name: 'Organization',
                value: 'organization'
            },
            {
                name: 'Website',
                value: 'website'
            }
     ];

        $scope.setOpts = function () {
            $scope.jsonLdBusiness = false;
            $scope.jsonLdOrganization = false;
            $scope.jsonLdWebsite = false;
            $scope.jsonLdPerson = false;
            $scope.jsonLdProduct = false;
            $scope.jsonLdEvent = false;
            delete $scope.jsonFormated;
        }

        $scope.setOpts();

        $scope.createJsonLd = function (i, value) {
            $scope.jsonFormated = [];
            console.log('Key', i, 'Value', value);
        }
        $scope.selectJsonLd = function (opt) {
            $scope.setOpts();
            $scope.type = opt.value;

            switch (opt.value) {
                case 'LocalBusiness':
                    $scope.jsonLdBusiness = true;
                    break;
                case 'organization':
                    $scope.jsonLdOrganization = true;
                    break;
                case 'website':
                    $scope.jsonLdWebsite = true;
                    break;
                case 'person':
                    $scope.jsonLdPerson = true;
                    break;
                case 'product':
                    $scope.jsonLdProduct = true;
                    break;
                case 'event':
                    $scope.jsonLdEvent = true;
                    break;
            }
        }

        $scope.addType = function (key) {
            switch (key) {
                case 'address':
                    return 'PostalAddress'
                    break;
                case 'geo':
                    return 'GeoCoordinates'
                    break;
                case 'contactPoint':
                    return 'ContactPoint'
                    break;
                case 'aggregateRating':
                    return 'aggregateRating'
                    break;
                case 'location':
                    return 'Place'
                    break;
                case 'offers':
                    return 'Offer'
                    break;
            }
        };

        $scope.inputChange = function (obj) {
            let args = {};
            for (var key in obj) {
                args['@context'] = 'http://www.schema.org';
                args['@type'] = $scope.type;
                args[key] = obj[key];
                args[key]['@type'] = $scope.addType(key);
                $scope.jsonFormated = JSON.stringify(args);
            }
        }

        // ============= JSON LD END =============

        $scope.salvar = function (seo) {
            Seo.salvar($scope.seo);
            $scope.seo = {};
            console.log("LOG PROD ======"+JSON.stringify(Seo.getSeos(), null, 3)+"======");
            Seo.janela();
        }

        $scope.remover = function (x) {
            Seo.remover(x);
        }

        $scope.ind = 0;
        $scope.editor = false;
        $scope.editando = function (x) {
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
            $scope.seo.loSeo.janela();
            cale = $scope.seos[$scope.seos.indexOf(x)].locale;
            $scope.seo.sitemap = $scope.seos[$scope.seos.indexOf(x)].sitemap;
            $scope.ind = $scope.seos.indexOf(x);
        }
        $scope.editar = function (x) {
            Seo.editar(x, $scope.ind);
            $scope.editor = false;
            $scope.sv = true;
            $scope.seo = {};
            Seo.janela();
        }

        $scope.remover = function (x) {
            Seo.remover(x);
        }

        $scope.ind = 0;
        $scope.editor = false;
        $scope.editando = function (x) {
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
            $scope.ind = $scope.seos.indexOf(x);
            location.href = '#form'
        }
        $scope.editar = function (x) {
            Seo.editar(x, $scope.ind);
            $scope.editor = false;
            $scope.sv = true;
            $scope.seo = {};
        }

        $scope.cancel = function () {
            location.href = '#seo'
            $scope.editor = false;
            $scope.sv = true;
            $scope.seo = {};
        }

        $scope.seos = Seo.seos;

        $scope.ops = Seo.ops;
        $scope.rops = Seo.rops;
        $scope.tt = Seo.tt;

    })