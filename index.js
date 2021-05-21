const checkHttpStatus = require('check-http-status');
const core = require('@actions/core');

try {
  const skip200 = core.getInput('skip200');
  const sitemapUrl = core.getInput('sitemap');
  const urlsList = core.getInput('urls');

  var httpConfig = {
    'options': {
      'headers': {
        'Accept': 'text/html',
      },
    },
  };

  if (!sitemapUrl && !urlsList) {
    core.setFailed('Either sitemap or urls is required.');
    process.exit();
  }

  if (sitemapUrl) {
    httpConfig['sitemap'] = JSON.parse(sitemapUrl);
  } else if (urlsList) {
    httpConfig['urls'] = JSON.parse(urlsList);
  }

  if (skip200) {
    httpConfig['skip200'] = skip200;
  }

  checkHttpStatus(httpConfig);
} catch (error) {
  core.setFailed(error.message);
}
