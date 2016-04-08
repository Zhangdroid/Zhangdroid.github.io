var ghpages = require('gh-pages')
var config = require('../config')

var repo = 'https://github.com/' + config.ghPages.repo + '.git'

ghpages.publish(config.build.assetsRoot, {
  branch: config.ghPages.branch,
  repo: repo
})
