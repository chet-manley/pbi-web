(function (angular, undefined) {
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
			controllerAs: 'headerCtrl'
		};
	}
	/* define directive */
	angular.module('pbiWeb')
		.directive('pbiHeader', pbiHeader);
}(angular));
