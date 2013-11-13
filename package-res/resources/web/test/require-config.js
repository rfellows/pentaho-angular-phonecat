var tests = Object.keys(window.__karma__.files).filter(function (file) {
    return (/Spec\.js$/).test(file);
});

pen = {};
pen.require = function() {
    require.apply(this, arguments);
} 
pen.define = function() {
    define.apply(this, arguments);
}

requirejs.config({

  baseUrl: 'base/app',
  paths: {
    'common-ui/angular': 'lib/provided/common-ui/resources/web/angular/angular',
    'common-ui/angular-resource': 'lib/provided/common-ui/resources/web/angular/angular-resource',
    'common-ui/angular-route': 'lib/provided/common-ui/resources/web/angular/angular-route',
    'common-ui/angular-ui-bootstrap': 'lib/provided/common-ui/resources/web/bootstrap/ui-bootstrap-tpls-0.6.0.min',
    'angular-mocks': 'lib/provided/common-ui/resources/web/angular/angular-mocks',
    'angular-scenario': 'lib/provided/common-ui/resources/web/angular/angular-scenario',
    'phonecat': 'js'
  },

  shim: {
    'common-ui/angular': { exports: 'angular' },
    'common-ui/angular-resource': { deps: ['common-ui/angular'], exports: 'Resource' },
    'common-ui/angular-route': { deps: ['common-ui/angular'], exports: 'Route' },
    'common-ui/angular-ui-bootstrap': { deps: ['common-ui/angular'] },
    'angular-mocks': { deps: ['common-ui/angular-resource'] }
  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: function() {
    window.__karma__.start();
  }
});
