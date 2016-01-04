(function (angular, undefined) {
	'use strict';
	/* define app module */
	angular.module('pbiWeb', [
		'ngRoute',
		'ngMaterial'
	]);
	
	/* define app routes */
	angular.module('pbiWeb')
		.config(function ($routeProvider) {
			$routeProvider
				.when('/', {
					redirectTo: '/home'
				})
				.when('/home', {
					templateUrl: 'app/components/home/home.html',
					controller: 'home',
					controllerAs: 'ctrl'
				})
				.when('/about', {
					templateUrl: 'app/components/about/about.html',
					controller: 'about',
					controllerAs: 'ctrl'
				})
				.when('/newsletters/:nlId?', {
					templateUrl: 'app/components/newsletters/newsletters.html',
					controller: '',
					controllerAs: '',
					reloadOnSearch: false
				})
				.when('/calendar', {
					templateUrl: 'app/components/calendar/calendar.html',
					controller: '',
					controllerAs: ''
				})
				.when('/media/:type?', {
					templateUrl: 'app/components/media/media.html',
					controller: '',
					controllerAs: ''
				})
				.when('/testimonials', {
					templateUrl: 'app/components/testimonials/testimonials.html',
					controller: '',
					controllerAs: ''
				})
				.when('/get-involved', {
					templateUrl: 'app/components/getInvolved/getInvolved.html',
					controller: '',
					controllerAs: ''
				})
				.when('/contact-us', {
					templateUrl: 'app/components/contactUs/contactUs.html',
					controller: '',
					controllerAs: ''
				})
				.when('/donate', {
					templateUrl: 'app/components/donate/donate.html',
					controller: 'donate',
					controllerAs: 'ctrl'
				});
		});
}(angular));
