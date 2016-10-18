var $ = require("jquery");
require('lib/ysbbase');
console.log('header.js');

$(document).ready(function() {
	
	$("li.my").mouseover(function() {
		$(".rvm").show();
	});
	
	$("li.my").mouseout(function() {
		$(".rvm").hide();
	});
	
});