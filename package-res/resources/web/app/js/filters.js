/* Filters */
pen.define(["common-ui/angular","common-ui/angular-resource"], function(angular, Resource){

	'use strict';

  var filters = function($filterProvider) {

    // $filterProvider.register('checkmark', function() {
    //   return function(input) {
    //     return input ? '\u2713' : '\u2718';
    //   }
    // });
    $filterProvider('checkmark', function() {
      return function(input) {
        return input ? '\u2713' : '\u2718';
      }
    });

  };

  return filters;


	// return angular.module('phonecatFilters', []).filter('checkmark', function() {
	//   return function(input) {
	//     return input ? '\u2713' : '\u2718';
	//   };
	// });
});

