Package.describe({
  name: 'pbastowski:angular-new-router',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Packaged up angular-new-router directly from bower',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/angular/router',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('./bower_components/angular-new-router/dist/router.es5.min.js', ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('pbastowski:angular-new-router');
  api.addFiles('angular-new-router-tests.js');
});
