'use strict';


angular.module( 'clientApp' )
	.filter( 'trusted', function ( $sce ) {
		return function ( url ) {
			return $sce.trustAsResourceUrl( url );
		};
	});
