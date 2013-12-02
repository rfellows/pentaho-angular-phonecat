/* Services */
pen.define([
  "common-ui/angular",
  "common-ui/angular-resource",
  "common-ui/jquery"],
  function(angular, Resource, $){

	'use strict';

  var urlPrefix = "";
  if( typeof(CONTEXT_PATH) != "undefined" ) {
    urlPrefix = CONTEXT_PATH + "content/_sample_/resources/web/app";
  }

  var services = function($serviceProvider) {

    $serviceProvider('Hello', function() {

      this.sayHello = function(name) {
        return "Hello, " + (name ? name : "World");
      }

    });

  };

  return services;

});