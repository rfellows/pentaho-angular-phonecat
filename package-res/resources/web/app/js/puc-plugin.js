pen.require([
  'mantle/puc-api/pucAngularApi',
  'phonecat/app'
  ], function(PentahoPluginHandler, appConfig) {
  
  var plugin = new PentahoPluginHandler.Plugin(appConfig).register();

  pen.openSample = function() {
    plugin.goNext('/phones');
  }

});