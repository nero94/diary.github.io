'use strict';

// Declare app level module which depends on views, and components
angular.module('diaryApp', [
    'ngRoute',
    'ngMaterial',
    'ngMessages',
    'ngAria'
])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when('/home', {
                templateUrl: 'home/home.html',
                controller: 'HomeController'
            })
            .otherwise({redirectTo: '/home'});
    }]);

/**
 * Item structure definition.
 * @typedef {Object} Item
 * @property {string} name - name of item
 * @property {[Comment]} comments - related comments
 * @property {number} timestamp - create timestamp
 */

/**
 * Comment structure definition.
 * @typedef {Object} Comment
 * @property {string} text - comment's text
 * @property {number} timestamp - create timestamp
 */