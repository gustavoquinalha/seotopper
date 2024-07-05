As meta tags são elementos HTML importantes para SEO (Search Engine Optimization) e ajudam os motores de busca a entender o conteúdo e a relevância de uma página da web. Abaixo estão as meta tags mais relevantes em 2024, com suas descrições e parâmetros quando aplicáveis:

Meta Tags Comuns
<meta charset="UTF-8">
Descrição: Define o conjunto de caracteres da página.
Parâmetros: UTF-8 é o mais comum, mas outros valores como ISO-8859-1 podem ser usados.

<meta name="viewport" content="width=device-width, initial-scale=1">
Descrição: Configura a visualização da página em dispositivos móveis.
Parâmetros:
width=device-width: Define a largura da página igual à largura da tela do dispositivo.
initial-scale=1: Define o nível de zoom inicial.

<meta name="description" content="Descrição da página">
Descrição: Fornece uma descrição concisa da página para os motores de busca.
Parâmetros: content deve conter uma breve descrição.

<meta name="keywords" content="palavra-chave1, palavra-chave2">
Descrição: Lista palavras-chave relevantes para a página.
Parâmetros: content deve conter uma lista de palavras-chave separadas por vírgulas.

<meta name="robots" content="index, follow">
Descrição: Informa aos motores de busca como indexar a página.
Parâmetros:
index: Permite indexar a página.
noindex: Não permite indexar a página.
follow: Permite seguir links na página.
nofollow: Não permite seguir links na página.

<meta http-equiv="refresh" content="30">
Descrição: Atualiza automaticamente a página após um determinado período.
Parâmetros: content deve conter o número de segundos antes da atualização.

Meta Tags de Redes Sociais
Open Graph (OG) Tags
Descrição: Usadas para melhorar a aparência da página quando compartilhada em redes sociais como Facebook.
Parâmetros:
<meta property="og:title" content="Título da página">
<meta property="og:description" content="Descrição da página">
<meta property="og:image" content="URL da imagem">
<meta property="og:url" content="URL da página">
<meta property="og:type" content="tipo do conteúdo (ex: website, article)">

Twitter Cards
Descrição: Usadas para melhorar a aparência da página quando compartilhada no Twitter.
Parâmetros:
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Título da página">
<meta name="twitter:description" content="Descrição da página">
<meta name="twitter:image" content="URL da imagem">
<meta name="twitter:site" content="@username_do_site">

Meta Tags de Segurança e Privacidade
<meta http-equiv="Content-Security-Policy" content="default-src 'self'">
Descrição: Ajuda a prevenir ataques como Cross-Site Scripting (XSS).
Parâmetros: content deve definir a política de segurança.

<meta name="referrer" content="no-referrer">
Descrição: Controla como as informações de referenciador são passadas.
Parâmetros:
no-referrer: Não envia o referenciador.
no-referrer-when-downgrade: Envia o referenciador apenas para conexões HTTPS.
same-origin: Envia o referenciador apenas para o mesmo domínio.
origin: Envia apenas a origem (domínio).
strict-origin: Envia a origem apenas para conexões HTTPS.
strict-origin-when-cross-origin: Combina strict-origin e no-referrer-when-downgrade.
unsafe-url: Envia o referenciador completo (não recomendado por razões de segurança).

Meta Tags de Indexação Avançada
<meta name="googlebot" content="index, follow">
Descrição: Configurações específicas para o bot do Google.
Parâmetros: Similares aos da tag robots.

<meta name="bingbot" content="index, follow">

Descrição: Configurações específicas para o bot do Bing.
Parâmetros: Similares aos da tag robots.
Meta Tags de Informações de Autor

<meta name="author" content="Nome do autor">
Descrição: Especifica o autor da página.
Parâmetros: content deve conter o nome do autor.

<meta name="generator" content="Ferramenta de criação">
Descrição: Especifica a ferramenta usada para criar a página.
Parâmetros: content deve conter o nome da ferramenta.
Meta Tags para Controle de Cache

<meta http-equiv="cache-control" content="no-cache">
Descrição: Controla o cache da página.
Parâmetros:
no-cache: Não permite cache.
private: Permite cache apenas para o navegador do usuário.
public: Permite cache para qualquer um.
max-age=seconds: Define o tempo máximo de cache em segundos.
Estas são algumas das meta tags mais comuns e úteis para SEO em 2024. É importante usar essas tags de forma adequada para melhorar a visibilidade e o desempenho do seu site nos motores de busca.

```
<!-- HTML Meta Tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title></title>
  <meta name="description" content="">
  <meta name="author" content="">
  <meta name="theme-color" content=""/>
  <meta name="msapplication-navbutton-color" content=""/>
  <meta name="apple-mobile-web-app-status-bar-style" content=""/>

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="">
  <meta property="og:type" content="website">
  <meta property="og:title" content="">
  <meta property="og:description" content="">
  <meta property="og:image" content="">
  <meta property="og:locale" content=""/>

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary">
  <meta property="twitter:domain" content="">
  <meta property="twitter:url" content="">
  <meta name="twitter:title" content="">
  <meta name="twitter:site" content="@gustavoquinalha">
  <meta name="twitter:description" content="">
  <meta name="twitter:image" content="">
  <meta name="twitter:image:alt" content="">


  <!-- JSON-LD Meta Tags -->
  <script type="application/ld+json">
  {
    "@context": "http://schema.org/",
    "@type": "WebSite",
    "url": "",
    "name": "",
    "alternateName": "",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
  </script>
  <!-- Meta Tags Generated via https://www.gustavoquinalha.github.io/seotopper -->
```
