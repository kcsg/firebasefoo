$(document).ready(function(){
	init();

	var http = require('http');
	http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/plain'});
	  res.end('Hello Node.js\n');
	}).listen(8124, "127.0.0.1");
	console.log('Server running at http://127.0.0.1:8124/');


});

function init(){
	initHeadroom();

}

function initHeadroom(){
	$("header").headroom({
		"tolerance": -12,
		"offset": 205,
		"classes": {
		"initial": "animated",
		"pinned": "swingInX",
		"unpinned": "swingOutX",
		"top": "headroom--top",
		"notTop": "headroom--not-top"
		}
	});
}