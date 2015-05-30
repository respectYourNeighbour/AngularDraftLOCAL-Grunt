'use strict';

/* Controllers */

var myAngularApp = angular.module('myAngularApp', []);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 'Data' fetched with a $http request;                    +
//  You need a web-server for this up and running;         +
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

myAngularApp.controller('myListCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.name = 'user';
	$scope.orderProperty = 'age';
}]);
