(function (angular, undefined) {
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
			controllerAs: 'footerCtrl'
		};
	}
	/* define directive */
	angular.module('pbiWeb')
		.directive('pbiFooter', pbiFooter);
}(angular));
