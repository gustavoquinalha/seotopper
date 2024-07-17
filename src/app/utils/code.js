export function returnCode(data) {
  if (!data) {
    data = {
      charset: '',
      viewport: '',
      name: '',
      title: '',
      description: '',
      canonical: '',
      image: '',
      imageAlt: '',
      favicon: '',
      color: '',
      author: '',
      robots: '',
      googlebot: '',
      sitemap: '',
      locale: '',
      site: '',
    }
  }
  return `
  <!-- HTML Meta Tags -->
  <meta charset="${data.charset}">
  <meta name="viewport" content="${data.viewport}">
  <base href="/">
  <title>${data.title}</title>
  <link rel="canonical" href="${data.canonical}">
  <link rel="icon" type="image/x-icon" href="${data.favicon}">
  <meta name="robots" content="${data.robots}">
  <meta name="googlebot" content="${data.googlebot}">
  <meta name="description" content="${data.description}">
  <meta name="author" content="${data.author}">
  <meta name="theme-color" content="${data.color}">

  <!-- Google Search Engine -->
  <meta itemprop="name" content="${data.name}">
  <meta itemprop="description" content="${data.description}">
  <meta itemprop="image" content="${data.image}">

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="${data.canonical}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${data.title}">
  <meta property="og:description" content="${data.description}">
  <meta property="og:image" content="${data.image}">
  <meta property="og:locale" content="${data.locale}">

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${data.title}">
  <meta name="twitter:site" content="${data.site}">
  <meta name="twitter:description" content="${data.description}">
  <meta name="twitter:image" content="${data.image}">
  <meta name="twitter:image:alt" content="${data.imageAlt}">

  <!-- Meta Tags Generated via https://gustavoquinalha.github.io/seotopper -->
  `;
}
