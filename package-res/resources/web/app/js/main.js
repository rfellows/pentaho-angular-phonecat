pen.require([
  "common-ui/angular", 
  "common-ui/angular-route",
  "common-ui/AnimatedAngularPluginHandler",
  "_sample_/app"
  ], function(angular, Route, AnimatedAngularPluginHandler, appConfig){

  var plugin = new AnimatedAngularPluginHandler.Plugin(appConfig).register();

  angular.bootstrap(document, [appConfig.moduleName]);
});
