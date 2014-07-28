$(document).ready(function(){
	init();


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