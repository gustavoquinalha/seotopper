const utils = require('./utils')

const requiredProperties = utils.requiredProperties
const checkMissingKeys = utils.checkMissingKeys
const createMissingKeysErrorMessage = utils.createMissingKeysErrorMessage
const checkEmptyKeys = utils.checkEmptyKeys
const createEmptyKeysErrorMessage = utils.createEmptyKeysErrorMessage

function seotopper(args) {
  const keys = Object.keys(args)
  const missingKeys = checkMissingKeys(requiredProperties, keys)

  if (missingKeys.length > 0) {
    throw new Error(createMissingKeysErrorMessage(missingKeys))
  }

  const emptyKeys = checkEmptyKeys(requiredProperties, keys, args)

  if (emptyKeys.length > 0) {
    throw new Error(createEmptyKeysErrorMessage(emptyKeys))
  }

  return `<title>${args.title}</title>
    <meta name="description" content="${args.description}"/>
    <meta name="author" content="${args.author}"/>
    ${args.base ? `<link rel="base" href="${args.base}"` : ''}
    <link rel="canonical" href="${args.canonical}"/>
    ${args.sitemap ?
      `<meta rel="sitemap" type="application/xml" content="${args.sitemap}"/>` :
       ''}
    <meta name="robots" content="${args.robots}"/>
    <meta name="googlebot" content="${args.robots}"/>
    ${args.themeColor ?
      `<meta name="theme-color" content="${args.themeColor}"/>
      <meta name="msapplication-navbutton-color" content="${args.themeColor}"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="${args.themeColor}"/>` :
      ''}

    <!-- Schema.org markup for Google+ -->
    <meta itemprop="name" content="${args.title}"/>
    <meta itemprop="description" content="${args.description}"/>
    <meta itemprop="image" content="${args.image}"/>

    ${args.facebook ?
      `<!-- markup for facebook -->
      <meta property="og:type" content="${args.facebookType}"/>
      <meta property="og:title" content="${args.title}"/>
      <meta property="og:url" content="${args.canonical}"/>
      ${args.facebookSiteName ?
        `<meta property="og:site_name" content="${args.facebookSiteName}"/>` :
        ''
      }
      <meta property="og:image" content="${args.image}"/>
      <meta property="og:description" content="${args.description}"/>
      ${args.facebookLocale ?
        `<meta property="og:locale" content="${args.facebookLocale}"/>` :
        ''
      }
      ${args.facebookId ?
        `<meta property="fb:app_id" content="${args.facebookId}"/>` :
        ''
      }
      ${args.facebookAdmins ?
        `<meta property="fb:admins" content="${args.facebookAdmins}"/>` :
        ''
      }` :
      ''
    }

    ${args.twitter ?
      `<!-- markup for twitter -->
      <meta name="twitter:card" content="${args.twitterCard}"/>
      <meta name="twitter:title" content="${args.title}"/>
      <meta name="twitter:description" content="${args.description}"/>
      <meta name="twitter:creator" content="${args.author}"/>
      <meta name="twitter:image" content="${args.image}"/>` :
      ''
    }

    <!-- JSON-LD - structured data markup Google Search -->
    <script type="application/ld+json"/>
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "name": "${args.title}",
      "alternateName": "${args.description}",
      "url": "${args.canonical}"
    }
    </script/>`.replace(/\n\s+/g, '\n')
}

module.exports = seotopper
