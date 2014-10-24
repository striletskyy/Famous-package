Package.describe({
  name: 'striletskyy:builder',
  summary: 'Build layout for mobile devices',
  version: '1.0.4',
  git: ' /* Fill me in! */ '
});

/* This defines your actual package */
//console.log("Hello from package", Package);
Package.on_use(function (api) {
  // If no version is specified for an 'api.use' dependency, use the
  // one defined in Meteor 0.9.0.
  console.log("Test api object, ", api);
  //api.versionsFrom('0.9.4');
  // Use Underscore package, but only on the server.
  // Version not specified, so it will be as of Meteor 0.9.0.
  api.add_files('striletskyy:builder.js', 'client');
});

