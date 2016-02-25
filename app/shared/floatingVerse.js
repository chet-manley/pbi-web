(function (angular) {
	'use strict';
	/* create directive */
	function pbiFloatingVerse() {
		var Controller = function Controller(cfg) {
				var ctrl = this;
					
			};
		Controller.$inject = ['APP_CONFIG'];
		return {
			restrict: 'AE',
			templateUrl: 'app/shared/floatingVerse.html',
			scope: {},
			bindToController: true,
			controller: Controller,
			controllerAs: 'ctrl'
		};
	}
	/* define directive */
	angular.module('pbiWeb')
		.directive('pbiFloatingVerse', pbiFloatingVerse);
}(angular));
