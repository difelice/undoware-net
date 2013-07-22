define([ 'angular', 'jquery-ui', 'beforeafter' ], function () {
	var angular = window.angular,
		$ = angular.element,
		local = angular.module('local', [], function () {
		}).directive('logo', function () {
			return {
				link: function (scope, elt, attrs) {
					elt.wrap("<a href='/'/>");
				},
				restrict: 'C'
			};
		}).directive('beforeafter', function() {
      return {
        compile: function (elt, attrs) {
          //TODO make efficient, this is kludgey
          jQuery(".beforeafter").beforeAfter();
        },
        restrict: 'C'
      }
    })
});
