(function(){
	angular
		.module('coderPoem')
		.controller('PoemCtrl', PoemCtrl);

	// PoemCtrl.$inject = ['poemSrv'];

	function PoemCtrl(poemSrv) {
			var self = this;
			// self.poem = "blah"

			self.poemSrv = poemSrv;
			self.poem = "";
			self.getPoem = getPoem;

			function getPoem(){
				poemSrv.newPoem().then(function(result){
					console.log(result);
					self.poem = result;
				});
			}

			// function thisPoem(){
			// 	return poemSrv.newPoem();
			// }
	  		// self.newPoem = poemSrv.getPoem();

	  		// below is the function for the generator button
	  		// poemGen.newPoem = function(){
	  			// function that is bound to service that populates with new poem
	  		// }

	}
})();
