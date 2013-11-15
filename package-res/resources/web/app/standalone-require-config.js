pen.requirejs.config({
  baseUrl: '.',
  paths: {
    'common-ui/jquery': 'lib/provided/common-ui/resources/web/jquery/jquery-1.9.1.min',
    'common-ui/angular': 'lib/provided/common-ui/resources/web/angular/angular',
    'common-ui/angular-resource': 'lib/provided/common-ui/resources/web/angular/angular-resource',
    'common-ui/angular-route': 'lib/provided/common-ui/resources/web/angular/angular-route',
    'common-ui/angular-ui-bootstrap': 'lib/provided/common-ui/resources/web/bootstrap/ui-bootstrap-tpls-0.6.0.min',

    'common-ui/PluginHandler': 'lib/provided/common-ui/resources/web/plugin-handler/pluginHandler',
    'common-ui/AngularPluginHandler': 'lib/provided/common-ui/resources/web/plugin-handler/angularPluginHandler',
    'common-ui/angular-animate': 'lib/provided/common-ui/resources/web/angular/angular-animate',
    'common-ui/jquery': 'lib/provided/common-ui/resources/web/jquery/jquery-1.9.1.min',
    'common-ui/AnimatedAngularPluginHandler': 'lib/provided/common-ui/resources/web/plugin-handler/animatedAngularPluginHandler',

    'phonecat': 'js'
  },

  shim: {
    'common-ui/angular': { deps: ['common-ui/jquery'], exports: 'angular' },
    'common-ui/angular-resource': { deps: ['common-ui/angular'], exports: 'Resource' },
    'common-ui/angular-route': { deps: ['common-ui/angular'], exports: 'Route' },
    'common-ui/angular-ui-bootstrap': { deps: ['common-ui/angular'] },

    'common-ui/jquery': { exports: '$' },
    'common-ui/PluginHandler': { deps: ['common-ui/jquery'] },
    'common-ui/angular-animate': { deps: ['common-ui/angular'] }
  }
});
