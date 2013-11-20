pen.define([
  'common-ui/angular',
  'angular-mocks',
  'phonecat/services'
],
function(angular, mocks, services, Resource) {

	'use strict';
	
	
	describe('factory', function() {
		
		beforeEach(function(){
			// Register Factory to new module
			services(angular.module('myFactoryMod', ['ngResource']).factory);

			// Require this module for test
			module("myFactoryMod")
		});

		describe('phones', function() {

			it('should retrieve a phone based on the phone id', 
				inject(function(Phone) {
					expect(Phone).toBeDefined();
				}));
				

		});
	});

});