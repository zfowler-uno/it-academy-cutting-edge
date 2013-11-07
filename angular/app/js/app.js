'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/movies', {templateUrl: 'partials/movies_list.html', controller: 'MovieList'});
  $routeProvider.when('/movies/:movieId', {templateUrl: 'partials/movies_detail.html', controller: 'MovieDetails'});
  $routeProvider.otherwise({redirectTo: '/movies'});
}]);
