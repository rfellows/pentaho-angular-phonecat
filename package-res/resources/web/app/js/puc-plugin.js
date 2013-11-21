pen.require([
  'mantle/puc-api/pucAngularPlugin',
  'phonecat/app'
  ], function(PUCAngularPlugin, appConfig) {
  
  var plugin = new PUCAngularPlugin(appConfig).register();

  pen.openSample = function() {
    plugin.goNext('/phones');
  }

});