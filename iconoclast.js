#!/usr/bin/env node

var phantom = require('phantomjs');

console.log("phantom = " + phantom);

exports.render = function(w,h,outPath,callback) {
	console.log("render called :: " + w + " " + h);
	callback({});
}