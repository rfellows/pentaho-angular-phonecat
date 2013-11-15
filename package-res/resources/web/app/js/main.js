pen.require([
  "common-ui/angular", 
  "common-ui/angular-route",
  "common-ui/AnimatedAngularPluginHandler",
  "phonecat/app"
  ], function(angular, Route, AnimatedAngularPluginHandler, appConfig){

  var plugin = new AnimatedAngularPluginHandler.Plugin('phonecatApp', appConfig).register();

  angular.bootstrap(document , ['phonecatApp']);
});
