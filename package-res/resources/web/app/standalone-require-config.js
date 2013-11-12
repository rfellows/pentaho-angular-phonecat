pen.requirejs.config({
  baseUrl: '.',
  paths: {
    'common-ui/jquery': 'lib/common-ui/resources/web/jquery/jquery-1.9.1.min',
    'common-ui/angular': 'lib/common-ui/resources/web/angular/angular',
    'common-ui/angular-resource': 'lib/common-ui/resources/web/angular/angular-resource',
    'common-ui/angular-route': 'lib/common-ui/resources/web/angular/angular-route',
    'common-ui/angular-ui-bootstrap': 'lib/common-ui/resources/web/bootstrap/ui-bootstrap-tpls-0.6.0.min',
    'phonecat': 'js'
  },

  shim: {
    'common-ui/angular': { deps: ['common-ui/jquery'], exports: 'angular' },
    'common-ui/angular-resource': { deps: ['common-ui/angular'], exports: 'Resource' },
    'common-ui/angular-route': { deps: ['common-ui/angular'], exports: 'Route' },
    'common-ui/angular-ui-bootstrap': { deps: ['common-ui/angular'] }
  }
});
