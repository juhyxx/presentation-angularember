'use strict';

/**
 * @ngdoc function
 * @name timetrackerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the timetrackerApp
 */
angular.module('timetrackerApp')
	.service('timer', ['$rootScope', function($rootScope) {
		var interval,
			handler = function() {
				$rootScope.$broadcast('tick');
			};

		return {
			isRunning: function() {
				return interval !== undefined;
			},
			run: function() {
				interval = setInterval(handler, 500);
			},
			stop: function() {
				clearInterval(interval);
				interval = undefined;
			}
		};
	}])
	.controller('MainCtrl', ['$scope', 'timer',

		function($scope, timer) {
			$scope.list = [{
				name: 'task1',
				estimated: 5,
				duration: 62 * 60 * 1000

			}, {
				name: 'task2',
				estimated: 5,
				duration: 987654321
			}];
			$scope.$on('add', function(scope, name, estimated) {
				if (timer.isRunning()) {
					timer.stop();
					$scope.list[0].duration = new Date().getTime() - $scope.list[0].time;
				}
				$scope.list.unshift({
					name: name,
					estimated: estimated,
					time: new Date().getTime(),
					duration: 0
				});
				timer.run();
				$scope.isRunning = timer.isRunning();
			});
			$scope.$on('stop', function() {
				$scope.list[0].duration = new Date().getTime() - $scope.list[0].time;
				timer.stop();
				$scope.isRunning = timer.isRunning();
			});
			$scope.$on('tick', function() {
				$scope.isRunning = timer.isRunning();
				$scope.list[0].duration = new Date().getTime() - $scope.list[0].time;
			});

		}
	]);