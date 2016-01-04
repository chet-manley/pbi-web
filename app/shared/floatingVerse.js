(function (angular, undefined) {
	'use strict';
	/* create directive */
	function pbiFloatingVerse() {
		var Controller = function Controller() {
				var ctrl = this;
					
			};
		
		return {
			restrict: 'AE',
			templateUrl: 'app/shared/floatingVerse.html',
			scope: {},
			bindToController: true,
			controller: Controller,
			controllerAs: 'floatingVerseCtrl'
		};
	}
	/* define directive */
	angular.module('pbiWeb')
		.directive('pbiFloatingVerse', pbiFloatingVerse);
}(angular));
