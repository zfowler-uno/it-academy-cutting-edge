'use strict';

/* Controllers */


angular.module('myApp.controllers', []).
  controller('MovieList', ['$scope',function MovieList($scope) {
        $scope.movies = [
            {movieId: 1, movie_title: "Movie1" , synopsis: "This was a great movie"},
            {movieId: 2, movie_title: "Movie2" , synopsis: "This was a great movie"}
        ];

  }])
  .controller('MovieDetails', ['$scope', '$routeParams', '$http',
        function MovieList($scope, $routeParams, $http) {
            $scope.movieId = $routeParams.movieId;
            $scope.movie =
        }

  ]);

