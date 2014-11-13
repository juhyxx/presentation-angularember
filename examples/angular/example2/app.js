angular.module('app', [])
	.controller('Ctrl', function($scope) {
		$scope.range1 = 0;
		$scope.range2 = 0;

		$scope.count = function() {
			$scope.output1 = parseInt($scope.range1, 10) + parseInt($scope.range2);
			$scope.output2 = parseInt($scope.text1, 10) + parseInt($scope.text2);
		}
	});