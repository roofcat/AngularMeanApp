'use strict';


angular.module( 'clientApp' )
	.directive( 'youtube', function () {
		return {
			restrict: 'E',
			scope: {
				src: '=',
			},
			templateUrl: 'views/youtube.html',
		};
	});
