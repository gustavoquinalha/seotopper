[![Stories in Ready](https://badge.waffle.io/gustavoquinalha/seotopper.png?label=ready&title=Ready)](https://waffle.io/gustavoquinalha/seotopper?utm_source=badge)
# Seotopper

[![Greenkeeper badge](https://badges.greenkeeper.io/gustavoquinalha/seotopper.svg)](https://greenkeeper.io/)
Gerador de SEO mais TOP do momento, com meta tags do facebook, twitter, google+ entre outras. [Confira](https://gustavoquinalha.github.io/seotopper)

# Novidade
JSON-LD - structured data markup Google Search

# Meta-tags
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

# v0.5
```html
<title>Título da minha página</title>
<meta name="description" content="Descrição da minha página"/>
<meta name="author" content="Autor da minha página"/>
<link rel="base" href="http://meusite.com.br"/>
<link rel="canonical" href="http://meusite.com.br"/>
<meta rel="sitemap" type="application/xml" content="http://meusite.com.br/sitemap.xml"/>
<meta name="robots" content="index/follow"/>
<meta name="googlebot" content="index/follow"/>
<meta name="theme-color" content="#FF4455"/>
<meta name="msapplication-navbutton-color" content="#FF4455"/>
<meta name="apple-mobile-web-app-status-bar-style" content="#FF4455"/>
<!-- Schema.org markup for Google+ -->
<meta itemprop="name" content="Título da minha página"/>
<meta itemprop="description" content="Descrição da minha página"/>
<meta itemprop="image" content="http://meusite.com.br/image.png"/>
<!-- markup for facebook -->
<meta property="og:type" content="website"/>
<meta property="og:title" content="Título da minha página"/>
<meta property="og:url" content="http://meusite.com.br"/>
<meta property="og:site_name" content="Exemplo"/>
<meta property="og:image" content="http://meusite.com.br/image.png"/>
<meta property="og:description" content="Descrição da minha página"/>
<meta property="og:locale" content="pt_BR"/>
<meta property="fb:app_id" content="5349"/>
<meta property="fb:admins" content="123456789"/>
<!-- markup for twitter -->
<meta name="twitter:card" content="summary"/>
<meta name="twitter:title" content="Título da minha página"/>
<meta name="twitter:description" content="Descrição da minha página"/>
<meta name="twitter:creator" content="Autor da minha página"/>
<meta name="twitter:image" content="http://meusite.com.br/image.png"/>
<!-- JSON-LD - structured data markup Google Search -->
<script type="application/ld+json"/>
{
  "@context": "http://schema.org",
  "@type": "WebSite",
  "name": "Exemplo",
  "alternateName": "Descrição da minha página",
  "url": "http://meusite.com.br"
}
</script/>
```

# v0.1
```html
<title>Título da minha página</title>
<meta name="description" content="Descrição da minha página"/>
<meta name="author" content="Autor da minha página"/>
<link rel="base" href="http://meusite.com.br"/>
<link rel="canonical" href="http://meusite.com.br"/>
<meta rel="sitemap" type="application/xml" content="http://meusite.com.br/sitemap.xml"/>
<meta name="robots" content="index/follow"/>
<!-- Schema.org markup for Google+ -->
<meta itemprop="name" content="Título da minha página"/>
<meta itemprop="description" content="Descrição da minha página"/>
<meta itemprop="image" content="http://meusite.com.br/image.png"/>
<!-- markup for facebook -->
<meta property="og:type" content="website"/>
<meta property="og:title" content="Título da minha página"/>
<meta property="og:url" content="http://meusite.com.br"/>
<meta property="og:site_name" content="Exemplo"/>
<meta property="og:image" content="http://meusite.com.br/image.png"/>
<meta property="og:description" content="Descrição da minha página"/>
<meta property="og:locale" content="pt_BR"/>
<meta property="fb:app_id" content="5349"/>
<meta property="fb:admins" content="123456789"/>
<!-- markup for twitter -->
<meta name="twitter:card" content="summary"/>
<meta name="twitter:title" content="Título da minha página"/>
<meta name="twitter:description" content="Descrição da minha página"/>
<meta name="twitter:creator" content="Autor da minha página"/>
<meta name="twitter:image" content="http://meusite.com.br/image.png"/>
```
