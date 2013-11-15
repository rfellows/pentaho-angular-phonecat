/* App Module */
var deps = [
  "common-ui/angular", 
  "common-ui/angular-route", 
  "common-ui/AnimatedAngularPluginHandler",
  "phonecat/controllers",
  "phonecat/services",
  "phonecat/filters",
  "phonecat/util",
  "common-ui/angular-ui-bootstrap",
  "common-ui/angular-resource"
  ];

pen.define(deps, function(angular, Route, AnimatedAngularPluginHandler, controllers, services, filters, Util){
  'use strict';
	var app = angular.module('phonecatApp', ['ui.bootstrap', 'ngRoute', 'ngAnimate', 'ngResource']);

	// app.config(['$routeProvider', function($routeProvider) {
	//   // $routeProvider.
	//   //     when('/phones', {templateUrl: 'partials/phone-list.html',   controller: 'PhoneListCtrl'}).
	//   //     when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: 'PhoneDetailCtrl'}).
	//   //     otherwise({redirectTo: '/phones'});
	// }]);

  var routes = function($routeProvider) {
    $routeProvider.
        when('/phones',
          {
            templateUrl: Util.buildResourceUrl('partials/phone-list.html'),
            controller: 'PhoneListCtrl'
          }).
        when('/phones/:phoneId',
          {
            templateUrl: Util.buildResourceUrl('partials/phone-detail.html'),
            controller: 'PhoneDetailCtrl'
          });
  }

  app.getRoutes = routes;
  app.getControllers = controllers;
  app.getServices = services;
  app.getFilters = filters;

	return app;
});
