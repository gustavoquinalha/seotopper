angular
    .module('app')
    .factory('Seo', function() {

    var Seo = {
        salvar: salvar,
        getSeos: getSeos,
        remover: remover,
        editar: editar,
        seos: [
          {
              id: 0,
              name: "Example",
              title: "Page title",
              description: "Page description",
              author: "Page author",
              canonical: "http://mywebsite.com",
              robots: "index/follow",
              image: "http://mywebsite.com/image.png",
              fbadmins: 123456789,
              base: "http://mywebsite.com",
              sitemap: "http://mywebsite.com/sitemap.xml",
              locale: "pt_BR",
              type: "website",
              appid: 012345,
              ttcard: "summary",
              color: "#FF4455"
          }
        ],
        id: 1,
        ops: [
            "website",
            "blog",
            "article",
            "activity",
            "sport",
            "company",
            "restaurant",
            "hotel",
            "cause",
            "band",
            "government",
            "non_profit",
            "school",
            "university",
            "actor",
            "athlete",
            "city",
            "country",
            "album",
            "book",
            "drink",
            "game",
            "product",
            "song",
            "movie",
        ],
        rops: [
            "index/follow",
            "noindex/follow",
            "index/nofollow",
            "noarchive",
            "nosnippet",
            "noodp",
            "notranslate",
            "noimageindex",
            "none"
        ],
        tt: [
            "Summary",
            "Product",
            "Photo",
            "Summary Large Image",
            "Player",
            "App",
            "Gallery"
        ]
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
                base: seo.base,
                sitemap: seo.sitemap,
                canonical: seo.canonical,
                robots: seo.robots,
                locale: seo.locale,
                name: seo.name,
                type: seo.type,
                appid: seo.appid,
                fbadmins: seo.fbadmins,
                ttcard: seo.ttcard,
                color: seo.color
            }
        );
        Seo.id++;
        console.log(JSON.stringify(seo, null, 12)+" --Inserido--> "+JSON.stringify(Seo.seos, null, 12)+"===============");
        location.href = '#seo'
    }

    function getSeos(x) {
        console.log("LOG LISTA ====== "+JSON.stringify(Seo.seos, null, 12)+" ===============");
        return Seo.seos;
    }
    
    function remover(x) {
        Seo.seos.splice(Seo.seos.indexOf(x),1);
        console.log("LOG REMOVER ====== "+JSON.stringify(Seo.seos, null, 12)+" ===============");
    }
    
    function editar(x,n) {
        Seo.seos[n].title = x.title;
        Seo.seos[n].description = x.description;
        Seo.seos[n].author = x.author;
        Seo.seos[n].image = x.image;
        Seo.seos[n].canonical = x.canonical;
        Seo.seos[n].robots = x.robots;
        Seo.seos[n].name = x.name;
        Seo.seos[n].type = x.type;
        Seo.seos[n].appid = x.appid;  
        Seo.seos[n].fbadmins = x.fbadmins;
        Seo.seos[n].ttcard = x.ttcard;
        location.href = '#seo'
        console.log("LOG EDIT ========= "+JSON.stringify(Seo.seos, null, 12));
    }
});
