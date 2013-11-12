/* Filters */
pen.define(["common-ui/angular","common-ui/angular-resource"], function(angular, Resource){

	'use strict';

	return angular.module('phonecatFilters', []).filter('checkmark', function() {
	  return function(input) {
	    return input ? '\u2713' : '\u2718';
	  };
	});
});

