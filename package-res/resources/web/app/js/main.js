pen.require([
  "common-ui/angular", 
  "common-ui/angular-route", 
  "phonecat/controllers",
  "phonecat/filters",
  "phonecat/services",
  "phonecat/directives"], function(){

  angular.bootstrap(document , ['phonecatApp']);

});
