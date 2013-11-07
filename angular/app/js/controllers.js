'use strict';

/* Controllers */


angular.module('myApp.controllers', []).
  controller('MovieList', ['$scope','$http',
        function MovieList($scope, $http) {
            // Here is where JSON pull goes.
            // $http.get().success(function(data){});
        $scope.movies = [
            {movieId: 1, movie_title: "Movie1" , synopsis: "This was a great movie"},
            {movieId: 2, movie_title: "Movie2" , synopsis: "This was a great movie"}
        ];

  }])
  .controller('MovieDetails', ['$scope', '$routeParams', '$http',
        function MovieList($scope, $routeParams, $http) {
            $http.get('movies/movie-' + $routeParams.movieId + '.json').success(function(data) {
                $scope.movie = data;
            });
            $scope.movieId = $routeParams.id;
        }
  ]);

