(function (angular) {
	'use strict';
	/* create controller */
	function Controller() {
		var ctrl = this,
			init = function init() {
				/* assign properties and methods to controller */
			};
		// this controller auto-inits
		init();
	}
	Controller.$inject = [];
	/* add controller */
	angular.module('pbiWeb')
		.controller('media', Controller);
}(angular));
