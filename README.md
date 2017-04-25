# Seotopper

[![Travis](https://img.shields.io/travis/gustavoquinalha/seotopper.svg)](https://travis-ci.org/gustavoquinalha/seotopper)
[![npm (scoped)](https://img.shields.io/npm/v/seotopper.svg)](https://www.npmjs.com/package/seotopper)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Build the SEO of your site in seconds.

Get visible on the internet in seconds and share your pages in a more beautiful way with complete a SEO generator, it supports all meta-tags and [JSON-LD](http://json-ld.org/).

*This README is also available in [Portuguese (Português)](README.pt.md).*

## Table of Contents
- [Install](#install)
- [Usage](#usage)
- [Supported Tags](#supported-tags)
- [API](#api)
- [Contribute](#contribute)
- [License](#license)

## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
$ npm install --save seotopper

# To use the CLI is recommended to install it globally
$ npm install -g seotopper
```

## Usage

```js
const seo = seotopper({
  title: 'Title of my page',
  description: 'Description of my page',
  author: 'Me',
  base: 'https://your-url.com.br',
  canonical: 'https://your-url.com.br',
  sitemap: 'https://your-url.com.br/sitemap.xml',
  robots: 'index, follow',
  themeColor: '#f00',
  image: 'https://your-url.com.br/images/intro.jpg',
  facebook: true,
  facebookType: 'website',
  facebookSiteName: 'Example',
  facebookLocale: 'en',
  facebookId: '5349',
  facebookAdmins: '123456789',
  twitter: true,
  twitterCard: 'summary'
})
// <title>Title of my page</title>
// <meta name="description" content="Description of your page"/>
// <meta name="author" content="Me"/>
// <link rel="base" href="https://your-url.com.br"
// <link rel="canonical" href="https://your-url.com.br"/>
// <meta rel="sitemap" type="application/xml" content="https://your-url.com.br/sitemap.xml"/>
// <meta name="robots" content="index, follow"/>
// <meta name="googlebot" content="index, follow"/>
// <meta name="theme-color" content="#f00"/>
// <meta name="msapplication-navbutton-color" content="#f00"/>
// <meta name="apple-mobile-web-app-status-bar-style" content="#f00"/>
// <!-- Schema.org markup for Google+ -->
// <meta itemprop="name" content="Title of my page"/>
// <meta itemprop="description" content="Description of your page"/>
// <meta itemprop="image" content="https://your-url.com.br/images/intro.jpg"/>
// <!-- markup for facebook -->
// <meta property="og:type" content="website"/>
// <meta property="og:title" content="Title of my page"/>
// <meta property="og:url" content="https://your-url.com.br"/>
// <meta property="og:site_name" content="Exemplo"/>
// <meta property="og:image" content="https://your-url.com.br/images/intro.jpg"/>
// <meta property="og:description" content="Description of your page"/>
// <meta property="og:locale" content="pt_BR"/>
// <meta property="fb:app_id" content="5349"/>
// <meta property="fb:admins" content="123456789"/>
// <!-- markup for twitter -->
// <meta name="twitter:card" content="summary"/>
// <meta name="twitter:title" content="Title of my page"/>
// <meta name="twitter:description" content="Description of your page"/>
// <meta name="twitter:creator" content="Me"/>
// <meta name="twitter:image" content="https://your-url.com.br/images/intro.jpg"/>
// <!-- JSON-LD - structured data markup Google Search -->
// <script type="application/ld+json"/>
// {
// "@context": "http://schema.org",
// "@type": "WebSite",
// "name": "Title of my page",
// "alternateName": "Description of your page",
// "url": "https://your-url.com.br"
// }
// </script/>
```

### CLI
Interactive cli.

## Supported Tags

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

## Contribute

First off, thanks for taking the time to contribute!
Now, take a moment to be sure your contributions make sense to everyone else.

### Reporting Issues

Found a problem? Want a new feature? First of all see if your issue or idea has [already been reported](../../issues).
If don't, just open a [new clear and descriptive issue](../../issues/new).

### Submitting pull requests

Pull requests are the greatest contributions, so be sure they are focused in scope, and do avoid unrelated commits.

- Fork it!
- Clone your fork: `git clone https://github.com/<your-username>/seotopper`
- Navigate to the newly cloned directory: `cd seotopper`
- Create a new branch for the new feature: `git checkout -b my-new-feature`
- Install the tools necessary for development: `npm install`
- Make your changes.
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request with full remarks documenting your changes.

## License

[MIT license](LICENSE.md) &copy; [Gustavo Quinalha](http://quinalha.me/)
