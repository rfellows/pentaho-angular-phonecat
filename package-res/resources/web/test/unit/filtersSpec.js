pen.define([
  'common-ui/angular',
  'angular-mocks',
  'phonecat/filters'
  ], 
  function(angular, mocks, filters) {

	'use strict';

	describe('filter', function() {

    // Provide the registration of the filter before each test
    beforeEach(module(function($filterProvider) {
      filters($filterProvider.register); 
    }));

	  // beforeEach(module('phonecatFilters'));
    // beforeEach(module('phonecatApp'));
    
	  describe('checkmark', function() {

	    it('should convert boolean values to unicode checkmark or cross',
        module(function(checkmark) {
  	      expect(checkmark(true)).toBe('\u2713');
  	      expect(checkmark(false)).toBe('\u2718');
  	    }));

      it('should convert boolean values to unicode checkmark or cross',
        module(function(checkmark) {
          expect(checkmark(true)).toBe('\u2713');
          expect(checkmark(false)).toBe('\u2718');
        }));
	  });
	});

});
