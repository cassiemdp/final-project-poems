(function(){
    
    angular
        .module('coderPoem')
        .service('poemSrv', PoemService);

    function PoemService($http) {
        var self = this;

        self.poem = POEM_DATA;

        self.newPoem = newPoem;

        function newPoem(){
        	// return self.poem;
        	// if(!self.poem){
        		return $http.get('/api/poems/')
        		.then(function(res){
        			console.log(res);
        			self.poem = res.data.poem;
        			return res.data.poem;
        		})
        	// }
        };
      }

      var POEM_DATA = 
      	"today embraced around be but couldn't lorge Woodbine frequent to Needles were family very decent George weeks to just come back I hate resorting"
      
})();

