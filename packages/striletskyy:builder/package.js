Package.describe({
  name: 'striletskyy:builder',
  summary: 'Build mobile layout template',
  version: '0.0.1',
  git: 'https://github.com/striletskyy/Builder.git'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.4');

  api.use('gadicohen:famous-views');
  api.use('raix:famono');
  api.use('mjn:famous');
  api.use('jonperl:famous-compiled');
  api.use('mjnetworks:mj-famous');

  api.export('Builder');
  api.addFiles('striletskyy:builder.js');
  api.addFiles('lib/grid.js');
});

Package.onTest(function(api) {
  api.use('mike:mocha');
  api.use('spacejamio:chai');
  api.use('striletskyy:builder');
  api.addFiles('striletskyy:builder-tests.js');
});
