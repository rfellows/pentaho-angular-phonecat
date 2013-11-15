pen.require([
  "common-ui/angular", 
  "common-ui/angular-route",
  "common-ui/AnimatedAngularPluginHandler",
  "phonecat/app"
  ], function(angular, Route, AnimatedAngularPluginHandler, app){

  var angularModuleConfig = {
    routerCallback : app.getRoutes,
    controllerCallback : app.getControllers,
    serviceCallback : app.getServices,
    filterCallback : app.getFilters
  }

  var plugin = new AnimatedAngularPluginHandler.AngularPlugin('phonecatApp', angularModuleConfig);

  AnimatedAngularPluginHandler.makePluggable(app);
  plugin.register();

  angular.bootstrap(document , ['phonecatApp']);

});
