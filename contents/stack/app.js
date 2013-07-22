requirejs.config({
	baseUrl: '/stack/',
	paths: {
		'undoware': './local',
    'jquery-ui': 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min',
    'beforeafter': './beforeafter',
		'angular':	'https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min',
	}
});

requirejs(['angular', 'local/main'], function () {
	angular.bootstrap('body', ['local']);
});
