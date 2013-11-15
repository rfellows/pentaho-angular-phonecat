/* Services */
pen.define([
  "common-ui/angular",
  "common-ui/angular-resource",
  "common-ui/jquery",
  "phonecat/util"],
  function(angular, Resource, $, Util){

	'use strict';

	// return angular.module('phonecatServices', ['ngResource']).
	//     factory('Phone', function($resource){
	//   return $resource('phones/:phoneId.json', {}, {
	//     query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
	//   });
	// });


  // return angular.module('phonecatServices', ['ngResource']).

  var factories = function($factoryProvider) {

    $factoryProvider('Phone', ['$resource', function($resource) {

      return $resource(Util.buildResourceUrl('phones/:phoneId.json'), {}, {
        query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
      });
    }]);
  };

  return factories;

});