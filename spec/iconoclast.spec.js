

var iconoclast = require('../iconoclast');
describe('runit', function() {

    it('should error when calling render without loading a page', function(done) {
        iconoclast.render(60,120,'path/to/output', { 
    		onSuccess: function(e, images) {
        	},
        	onError:function(e) {
        		expect(e).toBeDefined();
        		done();
        	}
       	});
    });

    it('should not suck', function(done) {
        iconoclast.load('http://www.rising.com', { 
    		onSuccess: function(e, images) {
        		expect(e).toBeDefined();
        		done();
        	}
       	});
    });

    it('should render when calling render after loading a page', function(done) {
        iconoclast.render(120,180,'path/to/output', { 
    		onSuccess: function(e, images) {
        		expect(e).toBeDefined();
        		done();
        	}
       	});
    });


    it('calls exit like a good user',function(done){
		iconoclast.exit();
		done();
    })
});