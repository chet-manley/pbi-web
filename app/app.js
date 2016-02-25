(function (angular) {
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
				.when('/about-us', {
					templateUrl: 'app/components/about/aboutUs.html',
					controller: 'aboutUs',
					controllerAs: 'ctrl'
				})
				.when('/newsletters/:id?', {
					templateUrl: 'app/components/newsletters/newsletters.html',
					controller: 'newsletters',
					controllerAs: 'ctrl',
					reloadOnSearch: false
				})
				.when('/calendar', {
					templateUrl: 'app/components/calendar/calendar.html',
					controller: 'calendar',
					controllerAs: 'ctrl'
				})
				.when('/media/:type?', {
					templateUrl: 'app/components/media/media.html',
					controller: 'media',
					controllerAs: 'ctrl'
				})
				.when('/testimonials', {
					templateUrl: 'app/components/testimonials/testimonials.html',
					controller: 'testimonials',
					controllerAs: 'ctrl'
				})
				.when('/get-involved', {
					templateUrl: 'app/components/getInvolved/getInvolved.html',
					controller: 'getInvolved',
					controllerAs: 'ctrl'
				})
				.when('/contact-us', {
					templateUrl: 'app/components/contactUs/contactUs.html',
					controller: 'contactUs',
					controllerAs: 'ctrl'
				})
				.when('/donate', {
					templateUrl: 'app/components/donate/donate.html',
					controller: 'donate',
					controllerAs: 'ctrl'
				});
		});
}(angular));
