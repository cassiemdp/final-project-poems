(function(){
    
    angular
        .module('coderPoem')
        .service('poemSrv', PoemService);

    function PoemService() {
        var self = this;

        self.poem = POEM_DATA;

        self.newPoem = newPoem;

        function newPoem(){
        	return self.poem;
        };
      }

      var POEM_DATA = 
      	"today embraced around be but couldn't lorge Woodbine frequent to Needles were family very decent George weeks to just come back I hate resorting"
      
})();
