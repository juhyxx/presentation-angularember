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
				var parseInput = function(text) {
					var out = 0,
						splited = text.split(/\s*(\d+h)?\s?(\d+m)? ?(\d+s)?\s*/),
						ms = [
							60 * 60 * 1000,
							60 * 1000,
							1000
						];

					splited.shift();
					splited.pop();

					for (var i = 0; i < splited.length; i++) {
						if (splited[i]) {
							out += parseInt(splited[i]) * ms[i];
						}
					}
					return out;
				};

				$scope.add = function() {
					$scope.$emit('add', $scope.name || 'Task', parseInput($scope.estimated) || 2 * 60 * 1000);
				};

			}
		};
	});