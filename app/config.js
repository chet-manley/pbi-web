(function (angular) {
	'use strict';
	/*  */
	/* create our app config */
	angular.module('pbiWeb')
		.constant('APP_CONFIG', {
		'appName': 'pbiWeb',
		'navigation': [{
			'name': 'Home',
			'href': '#/home'
			}, {
			'name': 'About Us',
			'href': '#/about-us'
			}, {
			'name': 'Newsletters',
			'href': '#/newsletters'
			}, {
			'name': 'Calendar',
			'href': '#/calendar'
			}, {
			'name': 'Media',
			'href': '#/media'
			}, {
			'name': 'Testimonials',
			'href': '#/testimonials'
			}, {
			'name': 'Get Involved',
			'href': '#/get-involved'
			}, {
			'name': 'Contact Us',
			'href': '#/contact-us'
			}, {
			'name': 'Donate',
			'href': '#/donate',
			'class': 'red'
			}, {
			'name': 'tdcj.texas.gov',
			'href': 'https://tdcj.texas.gov/divisions/rpd/rpd_volunteer.html',
			'class': 'green'
		}]
	});
}(angular));
