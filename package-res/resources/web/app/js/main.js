pen.require([
  "common-ui/angular", 
  "common-ui/angular-route",
  "common-ui/AnimatedAngularPlugin",
  "phonecat/app"
  ], function(angular, Route, AnimatedAngularPlugin, appConfig){

  var plugin = new AnimatedAngularPlugin(appConfig).register();

  angular.bootstrap(document, [appConfig.moduleName]);
});
