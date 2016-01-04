(function (angular, undefined) {
	'use strict';
	/* create directive */
	function pbiNavigation() {
		var Controller = function Controller() {
				var ctrl = this;
					
			};
		
		return {
			restrict: 'AE',
			templateUrl: 'app/shared/navigation.html',
			scope: {},
			bindToController: true,
			controller: Controller,
			controllerAs: 'navigationCtrl'
		};
	}
	/* define directive */
	angular.module('pbiWeb')
		.directive('pbiNavigation', pbiNavigation);
}(angular));
