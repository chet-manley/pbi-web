(function (angular) {
	'use strict';
	/* create directive */
	function pbiHeader() {
		var Controller = function Controller() {
				var ctrl = this;
					
			};
		return {
			restrict: 'AE',
			templateUrl: 'app/shared/header.html',
			scope: {},
			bindToController: true,
			controller: Controller,
			controllerAs: 'ctrl'
		};
	}
	/* define directive */
	angular.module('pbiWeb')
		.directive('pbiHeader', pbiHeader);
}(angular));
