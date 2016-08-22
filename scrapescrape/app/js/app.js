(function(){
	angular
		.module('coderPoem', ['ngRoute']);

	angular
		.module('coderPoem')
		.config(function($routeProvider) {

			$routeProvider

			.when('/home', {
				templateUrl:'app/partials/poem.html',
				controller:'PoemCtrl as ctrl',
			})

			.otherwise({
				redirectTo:'/home'
			})
	});
})();