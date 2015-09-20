'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module( 'clientApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'restangular',
  ])
  .config( function ( $routeProvider, RestangularProvider ) {

    RestangularProvider.setBaseUrl( 'http://localhost:3000' );
    
    $routeProvider
      .when( '/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when( '/movie', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl',
        controllerAs: 'movie'
      })
      .when('/movie/create', {
        templateUrl: 'views/movie-add.html',
        controller: 'MovieAddCtrl',
        controllerAs: 'movieAdd'
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie-view.html',
        controller: 'MovieViewCtrl',
        controllerAs: 'movieView'
      })
      .when('/movie/:id/delete', {
        templateUrl: 'views/movie-delete.html',
        controller: 'MovieDeleteCtrl',
        controllerAs: 'movieDelete'
      })
      .when('/movie/:id/edit', {
        templateUrl: 'views/movie-edit.html',
        controller: 'MovieEditCtrl',
        controllerAs: 'movieEdit'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
