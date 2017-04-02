#!/usr/bin/env node

const inquirer = require('inquirer')
const seotopper = require('../lib/seotopper')

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What\'s the title of your page',
    validate: value => {
      if (value === '') {
        return 'Please enter a title'
      }
      if (value.length > 57) {
        return 'Please enter a title with less than 57 characters'
      }
      return true
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'What\'s the description of your page',
    validate: value => {
      if (value === '') {
        return 'Please enter a description'
      }
      if (value.length > 160) {
        return 'Please enter a description with less than 160 characters'
      }
      return true
    }
  },
  {
    type: 'input',
    name: 'author',
    message: 'Who\'s the author',
    validate: value => {
      if (value === '') {
        return 'Please enter an author\'s name'
      }
      return true
    }
  },
  {
    type: 'input',
    name: 'image',
    message: 'What\'s the image of your page',
    validate: value => {
      if (value === '') {
        return 'Please enter an image'
      }
      return true
    }
  },
  {
    type: 'input',
    name: 'canonical',
    message: 'What\'s the canonical url of your page',
    validate: value => {
      if (value === '') {
        return 'Please enter a canonical url'
      }
      return true
    }
  },
  {
    type: 'list',
    name: 'robots',
    message: 'What you wanna tell to the robots',
    choices: [
      'index/follow',
      'noindex/follow',
      'index/nofollow',
      'noarchive',
      'nosnippet',
      'noodp',
      'notranslate',
      'noimageindex',
      'none'
    ]
  },
  {
    type: 'input',
    name: 'base',
    message: 'What\'s the base url of your page'
  },
  {
    type: 'input',
    name: 'sitemap',
    message: 'What\'s the sitemap of your page'
  },
  {
    type: 'input',
    name: 'themeColor',
    message: 'What\'s the theme-color of your page'
  },
  {
    type: 'confirm',
    name: 'facebook',
    message: 'Do you wanna seo for facebook'
  },
  {
    type: 'list',
    name: 'facebookType',
    message: 'What\'s the type of your page',
    choices: [
      'website',
      'blog',
      'article',
      'activity',
      'sport',
      'company',
      'restaurant',
      'hotel',
      'cause',
      'band',
      'government',
      'non_profit',
      'school',
      'university',
      'actor',
      'athlete',
      'city',
      'country',
      'album',
      'book',
      'drink',
      'game',
      'product',
      'song',
      'movie'
    ],
    when: answers => {
      return answers.facebook
    }
  },
  {
    type: 'input',
    name: 'facebookSiteName',
    message: 'What\'s the name of your page on facebook',
    when: answers => {
      return answers.facebook
    }
  },
  {
    type: 'input',
    name: 'facebookLocale',
    message: 'What\'s the locale of your page on facebook',
    when: answers => {
      return answers.facebook
    }
  },
  {
    type: 'input',
    name: 'facebookId',
    message: 'What\'s the id of your page on facebook',
    when: answers => {
      return answers.facebook
    }
  },
  {
    type: 'input',
    name: 'facebookAdmins',
    message: 'What are the admins of your page on facebook',
    when: answers => {
      return answers.facebook
    }
  },
  {
    type: 'confirm',
    name: 'twitter',
    message: 'Do you wanna seo for twitter'
  },
  {
    type: 'list',
    name: 'twitterCard',
    message: 'Which twitter do you want',
    choices: [
      'Summary',
      'Product',
      'Photo',
      'Summary Large Image',
      'Player',
      'App',
      'Gallery'
    ],
    when: answers => {
      return answers.twitter
    }
  }
]

inquirer.prompt(questions).then(answers => {
  const generatedSEO = seotopper(answers)
  process.stdout.write(generatedSEO)
})
