/* App Module */
var deps = [
  "common-ui/angular", 
  "common-ui/angular-route", 
  "common-ui/angular-ui-bootstrap",
  "phonecat/controllers",
  "phonecat/filters",
  "phonecat/services",
  "phonecat/directives"
  ];
pen.define(deps, function(angular, Route){
    'use strict';
	var app = angular.module('phonecatApp', ['ui.bootstrap', 'phonecatFilters', 'phonecatServices', 'ngRoute']);
	app.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.
	      when('/phones', {templateUrl: 'partials/phone-list.html',   controller: 'PhoneListCtrl'}).
	      when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: 'PhoneDetailCtrl'}).
	      otherwise({redirectTo: '/phones'});
	}]);

	return app;
  }
);
