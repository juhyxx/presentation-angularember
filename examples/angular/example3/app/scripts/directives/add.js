'use strict';

/**
 * @ngdoc directive
 * @name timetrackerApp.directive:add
 * @description
 * # add
 */
angular.module('timetrackerApp')
	.directive('add', function() {
		return {
			scope: {},
			templateUrl: 'views/directives/add.html',
			restrict: 'E',
			controller: function($scope) {
				$scope.add = function() {
					$scope.$emit('add', $scope.name || 'Task', $scope.estimated || 2 * 60 * 1000);
				};
			}
		};
	});