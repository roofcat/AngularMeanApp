'use strict';


angular.module( 'clientApp' )
  .controller( 'MovieAddCtrl', function ( $scope, Movie, $location ) {
  	$scope.movie = {};

  	$scope.saveMovie = function () {
  		Movie.post( $scope.movie ).then( function () {
  			$location.path( '/movie' );
  		});
  	};
  });
