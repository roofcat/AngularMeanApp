'use strict';

/**
 * @ngdoc service
 * @name clientApp.MovieRestangular
 * @description
 * # MovieRestangular
 * Factory in the clientApp.
 */
angular.module( 'clientApp' )
  .factory( 'MovieRestangular', function ( Restangular ) {
    return Restangular.withConfig( function ( RestangularConfigurer ) {
      RestangularConfigurer.setRestangularFields({
        id: '_id',
        
      });
    });
  });
