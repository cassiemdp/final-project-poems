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
	}
	
})();
