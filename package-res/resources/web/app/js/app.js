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
	var app = AnimatedAngularPluginHandler.module('phonecatApp', ['ui.bootstrap', 'ngResource']);

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

	return {
    moduleName: 'phonecatApp',
    routerCallback : routes,
    controllerCallback : controllers,
    factoryCallback : services,
    filterCallback : filters
  };
});
