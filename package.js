Package.describe({
  name: 'jhunlouiegonzales:biz-ssr',
  version: '0.0.1',
  summary: 'Server Side Rendering for Meteor with Blaze',
  git: 'https://github.com/junlouiegonzales/biz-ssr',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('2.6.1');
  api.use('ecmascript');
  api.mainModule('biz-ssr.js', 'server');
  api.use([
    'blaze@2.5.0', 
    'spacebars@1.2.0', 
    'spacebars-compiler@1.2.0'
  ]);
  api.export('SSR', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('jhunlouiegonzales:biz-ssr');
  api.mainModule('biz-ssr-tests.js');
});
