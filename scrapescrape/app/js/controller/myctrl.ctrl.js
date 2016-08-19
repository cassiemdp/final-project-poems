(function(){
	angular
		.module('coderPoem')
		.controller('PoemCtrl', PoemCtrl);

	function PoemCtrl() {
			var poemGen = this;
			
	  		poemGen.Poem = poemSrv.getPoem();

	  		// below is the function for the generator button
	  		poemGen.newPoem = function(){
	  			// function that is bound to service that populates with new poem
	  		}

	}
})();
