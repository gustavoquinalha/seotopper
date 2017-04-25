# Seotopper

[![Travis](https://img.shields.io/travis/thiamsantos/seotopper.svg)](https://travis-ci.org/thiamsantos/seotopper)
[![npm (scoped)](https://img.shields.io/npm/v/seotopper.svg)](https://www.npmjs.com/package/seotopper)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Construa o SEO de seu site em segundos.

Fique visível na internet em segundos e compartilhe as suas páginas de uma maneira mais fácil com um gerador de SEO completo, ele tem suporte a todas as meta-tags e ao [JSON-LD](http://json-ld.org/).

*Este README também está disponpivel em [Inglês (English).](README.md)*

## Índice
- [Instalação](#instalação)
- [Utilização](#utilização)
- [Tags Suportadas](#tags-suportadas)
- [API](#api)
- [Contribuir](#contribuir)
- [Licença](#licença)

## Instalação

Este projeto usa [node](http://nodejs.org) e [npm](https://npmjs.com). Veja se você não tem eles instalados localmente.

```sh
$ npm install --save seotopper

# Para usar a CLI é recomendado instalar globalmente
$ npm install -g seotopper
```

## Utilização

```js
const seo = seotopper({
  title: 'Título da minha página',
  description: 'Descrição da minha página',
  author: 'Eu',
  base: 'https://sua-url.com.br',
  canonical: 'https://sua-url.com.br',
  sitemap: 'https://sua-url.com.br/sitemap.xml',
  robots: 'index, follow',
  themeColor: '#f00',
  image: 'https://sua-url.com.br/images/intro.jpg',
  facebook: true,
  facebookType: 'website',
  facebookSiteName: 'Exemplo',
  facebookLocale: 'en',
  facebookId: '5349',
  facebookAdmins: '123456789',
  twitter: true,
  twitterCard: 'summary'
})
// <title>Título da minha página</title>
// <meta name="description" content="Descrição da minha página"/>
// <meta name="author" content="Eu"/>
// <link rel="base" href="https://sua-url.com.br"
// <link rel="canonical" href="https://sua-url.com.br"/>
// <meta rel="sitemap" type="application/xml" content="https://sua-url.com.br/sitemap.xml"/>
// <meta name="robots" content="index, follow"/>
// <meta name="googlebot" content="index, follow"/>
// <meta name="theme-color" content="#f00"/>
// <meta name="msapplication-navbutton-color" content="#f00"/>
// <meta name="apple-mobile-web-app-status-bar-style" content="#f00"/>
// <!-- Schema.org markup for Google+ -->
// <meta itemprop="name" content="Título da minha página"/>
// <meta itemprop="description" content="Descrição da minha página"/>
// <meta itemprop="image" content="https://sua-url.com.br/images/intro.jpg"/>
// <!-- markup for facebook -->
// <meta property="og:type" content="website"/>
// <meta property="og:title" content="Título da minha página"/>
// <meta property="og:url" content="https://sua-url.com.br"/>
// <meta property="og:site_name" content="Exemplo"/>
// <meta property="og:image" content="https://sua-url.com.br/images/intro.jpg"/>
// <meta property="og:description" content="Descrição da minha página"/>
// <meta property="og:locale" content="pt_BR"/>
// <meta property="fb:app_id" content="5349"/>
// <meta property="fb:admins" content="123456789"/>
// <!-- markup for twitter -->
// <meta name="twitter:card" content="summary"/>
// <meta name="twitter:title" content="Título da minha página"/>
// <meta name="twitter:description" content="Descrição da minha página"/>
// <meta name="twitter:creator" content="Eu"/>
// <meta name="twitter:image" content="https://sua-url.com.br/images/intro.jpg"/>
// <!-- JSON-LD - structured data markup Google Search -->
// <script type="application/ld+json"/>
// {
// "@context": "http://schema.org",
// "@type": "website",
// "name": "Título da minha página",
// "alternateName": "Descrição da minha página",
// "url": "https://sua-url.com.br"
// }
// </script/>
```

### CLI
Interactive cli.

## Tags Suportadas

- title
- description
- author
- base
- canonical
- sitemap
- robots
- googlebot
- theme-color
- msapplication-navbutton-color
- apple-mobile-web-app-status-bar-style
- name
- description
- image
- og:type
- og:title
- og:url
- og:site_name
- og:image
- og:description
- og:locale
- fb:app_id
- fb:admins
- twitter:card
- twitter:title
- twitter:description
- twitter:creator
- twitter:image
- application/ld+json

## API

## Contribuir

Primeiramente, muito obrigado por tirar tempo para contribuir!
Agora, espere um momento para ter certeza de que suas contribuições fazem sentido para todos.

### Reportando Issues

Encontrou um problema? Quer uma nova funcionalidade? Antes de tudo veja se a sua issue ou idéia [já foi reportada](../../issues).
Se não, abra uma [nova issue](../../issues/new) de maneira clara e descritiva.

### Submetendo pull requests

Pull requests são as maiores contribuições, então tenha certeza que estão dentro do escopo, e evite commits não relacionados.

- Faça um fork do projeto!
- Clone o seu fork: `git clone https://github.com/<your-username>/seotopper`
- Navegue até o diretório que acabou de ser clonado: `cd seotopper`
- Crie um novo branch para a nova funcionalidade: `git checkout -b my-new-feature`
- Instale as ferramentas necessárias para o desenvolvimento: `npm install`
- Faça as suas alterações.
- Faça o commit de suas alterações: `git commit -am 'Add some feature'`
- Faça um push do branch: `git push origin my-new-feature`
- Submeta um pull request documentando as suas alterações.

## Licença

[MIT license](LICENSE.md) &copy; [Gustavo Quinalha](http://quinalha.me/)
