(function(){
	angular
		.module('coderPoem', ['ngRoute', 'ngLoadingSpinner', 'ngclipboard']);

	angular
		.module('coderPoem')
		.config(function($routeProvider) {

			$routeProvider

			.when('/home', {
				templateUrl:'partials/poem.html',
				controller:'PoemCtrl as ctrl',
			})

			.otherwise({
				redirectTo:'/home'
			})
	});
})();