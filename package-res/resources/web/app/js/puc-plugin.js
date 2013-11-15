pen.require([
  'mantle/puc-api/pucAngularApi',
  'phonecat/app'
  ], function(PentahoPluginHandler, app) {
  
  var angularModuleConfig = {
    routerCallback : app.getRoutes,
    controllerCallback : app.getControllers,
    serviceCallback : app.getServices,
    filterCallback : app.getFilters
  }

  var plugin = new PentahoPluginHandler.PUCAngularPlugin(angularModuleConfig).register();

  pen.openSample = function() {
    plugin.goNext('/phones');
  }

});