(function (angular, undefined) {
	'use strict';
	/* create controller */
	function HomeController($routeParams) {
		var ctrl = this,
			init = function init() {
				// assign properties and methods to controller //
				
				// public methods
				
			};
		// this controller auto-inits
		init();
		console.log('HomeController', ctrl);
	}
	/* add controller */
	angular.module('pbiWeb')
		.controller('home', ['$routeParams', HomeController]);
}(angular));
