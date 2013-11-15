pen.define([
	// "phonecat/app",
	"common-ui/angular",
	"common-ui/angular-resource",
	"common-ui/angular-route",
	"phonecat/util"
	],

	function(/*app,*/ angular, Resource, Route, Util){
		/* Controllers */
		// 'use strict';
		// function PhoneListCtrl($scope, Phone) {
		//   $scope.phones = Phone.query();
		//   $scope.orderProp = 'age';
		// }

		// function PhoneDetailCtrl($scope, $routeParams, Phone) {
		//   $scope.myInterval = 5000;

		//   $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
		//     $scope.mainImageUrl = phone.images[0];

		//     $scope.slides = [];
		//     for( var i = 0; i < phone.images.length; i++ ) {
		// 	    $scope.slides.push({
		// 	    	image: phone.images[i],
		// 	    	text: phone.name,
		// 	    	description: phone.description
		// 	    })
		//     }
		//   });
		  
		//   $scope.setImage = function(imageUrl) {
		//     $scope.mainImageUrl = imageUrl;
		//   }

		// }

		// app.controller('PhoneListCtrl', ['$scope', 'Phone', PhoneListCtrl]);
		// app.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', PhoneDetailCtrl]);

		function PhoneListCtrl($scope, Phone) {
		  $scope.phones = Phone.query();
		  $scope.orderProp = 'age';
		}

		function PhoneDetailCtrl($scope, $routeParams, Phone) {
		  $scope.myInterval = 5000;

		  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
		    $scope.mainImageUrl = phone.images[0];

		    $scope.slides = [];
		    for( var i = 0; i < phone.images.length; i++ ) {
			    $scope.slides.push({
			    	image: Util.buildResourceUrl(phone.images[i]),
			    	text: phone.name,
			    	description: phone.description
			    })
		    }
		  });
		  
		  $scope.setImage = function(imageUrl) {
		    $scope.mainImageUrl = Util.buildResourceUrl(imageUrl);
		  }

		}

		var controllers = function($controller) {
			$controller('PhoneListCtrl', ['$scope', 'Phone', PhoneListCtrl]);
			$controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', PhoneDetailCtrl]);
		};

		return controllers;

});