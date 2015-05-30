'use strict';

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  Init module                                            +
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var myAngularApp = angular.module('myAngularApp', ['ui.router']);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  Routing                                                +
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
myAngularApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

  	// For any unmatched url, redirect to /state1
  	$urlRouterProvider.otherwise("/state1");

  	// Now set up the states
  	$stateProvider
    	.state('state1', {
      		url: "/state1",
      		templateUrl: "partials/state1.html"
    	})
    	.state('state1.list', {
      		url: "/list",
      		templateUrl: "partials/state1.list.html",
      		controller: 'state1Ctrl'
    	})
    	.state('state2', {
      		url: "/state2",
      		templateUrl: "partials/state2.html"
    	})
    	.state('state2.list', {
      		url: "/list",
      		templateUrl: "partials/state2.list.html",
     		controller: 'state2Ctrl'
   		});

}]);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  Controllers                                            +
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

myAngularApp.controller('myListCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.name = 'user';
	$scope.orderProperty = 'age';
}]);

myAngularApp.controller('state1Ctrl', ['$scope', function($scope) {
	$scope.items = ["A", "List", "Of", "Items"];
}]);

myAngularApp.controller('state2Ctrl', ['$scope', function($scope) {
	$scope.things = ["A", "Set", "Of", "Things"];
}]);
