'use strict';


angular.module( 'clientApp' )
  .controller( 'MovieCtrl', function ( $scope ) {
  	$scope.movies = [
  		{
  			title: 'Una prueba',
  			url: 'https://www.youtube.com/watch?v=OhPFgqHz68o',
  		},
  	];
  });