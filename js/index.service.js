angular
    .module('app')
    .factory('Seo', function() {

    var Seo = {
        salvar: salvar,
        getSeos: getSeos,
        seos: [
          {
              id: 0,
              name: "teste",
              title: "titulo da minha pagina",
              description: "descricao da minha pagina",
              author: "autor da minha pagina",
              canonical: "canonicallll",
              robots: "index/follow",
              image: "http://meusite.com.br/image.png",
              fbadmins: 99999,
              type: "website",
              appid: 12321312323,
              ttcard: "summary"
          }
        ],
        id: 1
    };
    return Seo;

    function salvar(seo) {
        Seo.seos.push(
            {
                id: Seo.id,
                title: seo.title,
                description: seo.description,
                author: seo.author,
                image: seo.image,
                canonical: seo.canonical,
                robots: seo.robots,
                name: seo.name,
                type: seo.type,
                appid: seo.appid,
                fbadmins: seo.fbadmins,
                ttcard: seo.ttcard                
            }
        );
        Seo.id++;
        console.log(JSON.stringify(seo, null, 3)+" --Inserido--> "+JSON.stringify(Seo.seos, null, 3)+"===============");
    }

    function getSeos(x) {
        console.log("LOG LISTA ====== "+JSON.stringify(Seo.seos, null, 3)+" ===============");
        return Seo.seos;
    }

});
