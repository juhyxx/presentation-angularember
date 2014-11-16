'use strict';

/**
 * @ngdoc directive
 * @name timetrackerApp.directive:progressbar
 * @description
 * # progressbar
 */
angular.module('timetrackerApp')
	.directive('progressbar', function() {
		return {
			templateUrl: 'views/directives/progressbar.html',
			restrict: 'E',
			scope: {
				data: '=',
				disabled: '='
			},
			link: function(scope) {
				scope.stop = function() {
					scope.$emit('stop');
				};
				scope.$on('tick', function() {
					var now = new Date().getTime(),
						data = scope.data[0],
						progress = 0;

					progress = Math.round(((now - data.time) / data.estimated) * 100);
					scope.width = Math.min(progress, 100);
					scope.name = data.name + ' ' + progress + '%';
					scope.time = now - data.time;
					scope.$apply();
				});

			}
		};
	});