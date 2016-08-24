var express 	= require ('express');
	app			= express();
	fs			= require('fs');
	freestyle 	= require('freestyle');

app.use(express.static(__dirname + './../app/'));

app.listen(8080,function(){
		console.log('Server Started on http://localhost:8080');
		console.log('Press CTRL + C to stop server');
});

app.get('/api/poems/', function(req, res) {
	var s = fs.createReadStream(process.argv[2] || ('text.txt'));

	freestyle(s, function (rap) {
		var poem = "";
		for (var i = 0; i < 10; i++) {
			var A = rap.couplet(10);
			var B = rap.couplet(10);
	        
	        poem += [
				A[0], B[0], A[1], B[1], ''
			].join('\n');
			poem += '\n';
		}
		console.log(poem); // send this
		res.json({poem: poem});
	});

});



/* TODO:
 1. write code to get server running
 2. define endpoint to return poem
 	- call freestyle()
 	- send the result of freestyle()
*/

