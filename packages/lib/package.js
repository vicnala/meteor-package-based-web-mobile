Package.describe({
  name: 'myapp:lib',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'MyApp libraries',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {

    api.versionsFrom('1.1.0.2');

    //Main dependencies
    var packages = [
      'templating',
      'iron:router@1.0.9'
    ];

    api.use(packages);
    api.imply(packages);

    api.addFiles([
      'lib/core.js'
    ], ['client', 'server']);

    api.export([
      'MyApp'
    ]);
    
});
