#!/usr/bin/env node

var phantom = require('phantom');

var page = null;

exports.load = function(uri, delegate) {
	//onsole.log("loading uri : " + uri);
	delegate = delegate || {};
	var retDelegate = {
		onSuccess:delegate.onSuccess,
		onError:delegate.onError
	};

	phantom.create(function (ph) {
		phInst = ph;
  		ph.createPage(function (pg) {
  			page = pg;
    		page.open(uri, function (status) {
      			console.log("opened page ", status);
      			delegate.onSuccess('mmm hmm');
      			//ph.exit();
	    	});
	  	});
	}, 
	{dnodeOpts: { weak: false } }
	);

	return retDelegate;


}

exports.render = function(w,h,outPath,delegate) {
	delegate = delegate || {};
	var retDelegate = {
		onSuccess:delegate.onSuccess,
		onError:delegate.onError
	};

	if(!page) {
		if(retDelegate.onError) {
			setTimeout(function(){
				retDelegate.onError("Error: There is not a loaded page, you should call load first");
			},0);
		}
		else {
			console.error("Error: No error handler for the error -> There is not a loaded page, you should call load first")
		}
	}
	else {
		page.set('viewportSize', { width:w, height:h }, function(e) {
			setTimeout(function(){
				page.render("myImage.png",function() {
					retDelegate.onSuccess('hey');	
				});
			},100);
		});
	}

			


	return retDelegate;
}

exports.exit = function() {
	phInst.exit();
}