(function(){
	angular
		.module('coderPoem', ['ngRoute']);

	angular
		.module('coderPoem')
		.config(function($routeProvider) {

			$routeProvider
			.when('/home', {
				templateUrl:'../partials/poem.html',
				controller:'PoemCtrl as ctrl'
			})
			.when('/poem/', {
				templateUrl:'../partials/poemGen.html',
				controller: 'PoemCtrl as ctrl'
			})
			.otherwise({
				redirectTo:'/home'
			})
	});
})();