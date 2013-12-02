pen.require([
  'mantle/puc-api/pucAngularApi',
  '_sample_/app'
  ], function(PentahoPluginHandler, appConfig) {
  
  var plugin = new PentahoPluginHandler.Plugin(appConfig).register();

  pen.openSample = function() {
    plugin.goNext('/view1');
  }

});