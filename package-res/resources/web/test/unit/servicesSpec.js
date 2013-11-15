pen.define([
  'common-ui/angular',
  'angular-mocks',
  'phonecat/services'
  ], 
  function(angular, mocks, services) {

	'use strict';

	describe('factory', function() {

	    // Provide the registration of the filter before each test
	    beforeEach(module(function($provide) {
	      services($provide.factory); 
	    }));

		describe('phones', function() {

			it('retrieve a phone based on the phone id',
				module(function(Phone) {
		      		expect(true).toEqual(false);
			    }));
		});
	});

});