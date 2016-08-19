var express 	= require ('express');
	app			= express();
	fs			= require('fs');
	freestyle 	= require('freestyle');

var s = fs.createReadStream(process.argv[2] || ('text.txt'));

freestyle(s, function (rap) {
	for (var i = 0; i < 10; i++) {
		var A = rap.couplet(10);
		var B = rap.couplet(10);
        
		console.log([
			A[0], B[0], A[1], B[1], ''
		].join('\n'));
	}
});
