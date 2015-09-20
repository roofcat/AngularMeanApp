'use strict';


angular.module( 'clientApp' )
  .controller( 'MovieViewCtrl', function ( $scope, $routeParams, Movie ) {
    
    $scope.viweMovie = true;

    $scope.movie = Movie.one( $routeParams.id ).get().$object;
  });
