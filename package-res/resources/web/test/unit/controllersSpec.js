pen.define([
  'common-ui/angular',
  'angular-mocks',
  '_sample_/main'
  ], function(angular, mocks, main) {

  'use strict';

  /* jasmine specs for controllers go here */
  describe('_sample_ controllers', function() {

    beforeEach(function(){
      module('_sample_App');
    });

    describe('View1Ctrl', function(){
      var scope, ctrl;

      beforeEach(inject(function($rootScope, $controller) {
        // set up a fresh scope for each test
        scope = $rootScope.$new();
        ctrl = $controller('View1Ctrl', {$scope: scope});
      }));


      it('should set the greeting when sayHello is called', function() {
        expect(scope.greeting).toBe("");
        scope.sayHello();
        expect(scope.greeting).not.toBe("");
      });


      it('should set the default value of title', function() {
        expect(scope.title).toBe('Pentaho-Angular Seed Project');
      });
    });


    describe('View2Ctrl', function(){
      var scope, ctrl

      beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('View2Ctrl', {$scope: scope});
      }));


      it('should set the title by default', function() {
        expect(scope.title).toBe('View2');
      });
    });
  });

}); 