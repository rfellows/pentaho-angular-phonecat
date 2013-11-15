pen.define([
  'common-ui/angular',
  'common-ui/angular-resource',
  'angular-mocks',
  // 'phonecat/main',
  'phonecat/filters'
  ], 
  function(angular, Resource, mocks, filters) {

	'use strict';

	/* jasmine specs for filters go here */

	describe('filter', function() {

	  // beforeEach(module('phonecatFilters'));
    // beforeEach(module('phonecatApp'));
    beforeEach(inject(function($filterProvider) {
      filters($filterProvider);
    }));

	  describe('checkmark', function() {

	    it('should convert boolean values to unicode checkmark or cross',
	        inject(function(checkmarkFilter) {
	      expect(checkmarkFilter(true)).toBe('\u2713');
	      expect(checkmarkFilter(false)).toBe('\u2718');
	    }));

      it('should convert boolean values to unicode checkmark or cross',
          inject(function(checkmarkFilter) {
        expect(checkmarkFilter(true)).toBe('\u2713');
        expect(checkmarkFilter(false)).toBe('\u2718');
      }));


	  });
	});

});
