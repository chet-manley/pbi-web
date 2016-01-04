(function (angular, undefined) {
	'use strict';
	/* define controller */
	function RouteController($router) {
		var ctrl = this,
			init = function init() {
				// assign properties and methods to controller //
				
			};
		// this controller auto-inits
		init();
	}
	/* add controller */
	angular.module('pbiWeb')
		.controller('RouteController', ['$router', RouteController]);
}(angular));
