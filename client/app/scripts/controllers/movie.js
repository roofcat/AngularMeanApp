'use strict';


angular.module( 'clientApp' )
  .controller( 'MovieCtrl', function ( $scope, Movie ) {
  	$scope.movies = Movie.getList().$object;
  });