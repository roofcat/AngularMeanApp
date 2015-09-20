'use strict';


angular.module( 'clientApp' )
	.controller( 'MovieDeleteCtrl', function ( $scope, $routeParams, Movie, $location ) {
		
		$scope.movie = Movie.one( $routeParams.id ).get().$object;
		
		$scope.deleteMovie = function () {
			$scope.movie.remove().then( function () {
				$location.path( '/movie' );
			});
		};

		$scope.back = function () {
			$location.path( '/movie/' + $routeParams.id );
		};
	});
