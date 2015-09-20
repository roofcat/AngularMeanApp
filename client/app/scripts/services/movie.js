'use strict';


angular.module( 'clientApp' )
  .factory( 'Movie', function ( MovieRestangular ) {
    return MovieRestangular.service( 'movie' );
  });
