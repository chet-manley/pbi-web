(function (angular) {
	'use strict';
	/* create directive */
	function pbiFooter() {
		var Controller = function Controller() {
				var ctrl = this;
					
			};
		return {
			restrict: 'AE',
			templateUrl: 'app/shared/footer.html',
			scope: {},
			bindToController: true,
			controller: Controller,
			controllerAs: 'ctrl'
		};
	}
	/* define directive */
	angular.module('pbiWeb')
		.directive('pbiFooter', pbiFooter);
}(angular));
