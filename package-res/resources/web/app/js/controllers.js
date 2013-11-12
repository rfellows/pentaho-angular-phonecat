pen.define([
	"phonecat/app",
	"common-ui/angular",
	"common-ui/angular-resource",
	"common-ui/angular-route"
	],

	function(myApp, angular, Resource){
		/* Controllers */
		'use strict';


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
			    	image: phone.images[i],
			    	text: phone.name,
			    	description: phone.description
			    })
		    }
		  });
		  
		  $scope.setImage = function(imageUrl) {
		    $scope.mainImageUrl = imageUrl;
		  }

		}


		myApp.controller('PhoneListCtrl', ['$scope', 'Phone', PhoneListCtrl]);
		myApp.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', PhoneDetailCtrl]);

});