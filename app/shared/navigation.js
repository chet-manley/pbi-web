(function (angular) {
	'use strict';
	/* create directive */
	function pbiNavigation() {
		var Controller = function Controller(cfg) {
				var ctrl = this;
				ctrl.nav = cfg.navigation;
			};
		Controller.$inject = ['APP_CONFIG'];
		return {
			restrict: 'AE',
			templateUrl: 'app/shared/navigation.html',
			scope: {},
			bindToController: true,
			controller: Controller,
			controllerAs: 'ctrl'
		};
	}
	/* define directive */
	angular.module('pbiWeb')
		.directive('pbiNavigation', pbiNavigation);
}(angular));
