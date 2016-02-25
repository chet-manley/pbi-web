(function (angular) {
	'use strict';
	/* create controller */
	function Controller($routeParams) {
		var ctrl = this,
			init = function init() {
				/* assign properties and methods to controller */
			};
		// this controller auto-inits
		init();
		console.log('HomeController', ctrl);
	}
	Controller.$inject = ['$routeParams'];
	/* add controller */
	angular.module('pbiWeb')
		.controller('home', Controller);
}(angular));
