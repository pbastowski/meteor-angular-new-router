Package.describe({
  name: 'pbastowski:angular-new-router',
  version: '0.0.3',
  summary: 'Packaged up angular-new-router directly from npm',
  git: 'https://github.com/angular/router',
  documentation: 'README.md'
});

var npmDeps = {
    "angular-new-router": "0.5.3",
};

Npm.depends(npmDeps);

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('.npm/package/node_modules/angular-new-router/dist/router.es5.js', ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('pbastowski:angular-new-router');
  api.addFiles('angular-new-router-tests.js');
});
