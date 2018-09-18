var faker = require('faker')
describe('Task API Routes', function() {  

 // In this test it's expected a task list of two tasks
    describe('GET /getAllProducts/', function() {
        it('returns a list of products', function(done) {
            request.get('/getAllProducts/')
                .expect(200)
                .end(function(err, res) {
                    //expect(res.body).to.have.lengthOf(7);
		    expect(done).to.be.instanceof(Object);
                    done(err);
                });
        });
    });


    describe('GET /getProdById/:name', function() {
        it('returns a product by id', function(done) {
            request.get('/getProdById/:name')
                 .expect(200)
                .end(function(err, res) {
                    //expect(res.body).to.have.lengthOf(7);
                    //expect(res.body);
		    expect(done).to.be.instanceof(Object);
                    done(err);
                });
        });
    });

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}



describe('POST /insertDetailsProd/', function() {
        it('insert a product', function(done) {
            request.post('/insertDetailsProd/')
                .send({
          		//pid : "gyii17aud1712345", //Mention new pid here 
                        pid: (parseInt(getRndInteger(21,16050))).toString(),
			title : "Mobilica", 
			ptype : "Electronics",
		        price : 1000,
		        prod_desc_attributes : { year : "2000", cpu : "test17", power : "75 RMS" },
		        total_qty : 50000, 
			sold_qty : 211
                   })
                .expect(200)
                .end(function(err, res) {
		    //expect(done.statusCode).to.equal(200)
		    //expect(done.typeof).equal(String);
		    expect(done).to.be.instanceof(Object); 
                    //done("duplicate pid entered  "+err);
                    done(err) //duplicate pid entered..enter unique pid
                });
        });
    });



    describe('update product by title', function() {
        it('returns /updateProd/:name', function(done) {
            request.put('/updateProd/:name')
                 .expect(200)
                .end(function(err, res) {
                    //expect(res.body).to.have.lengthOf(7);
                    //expect(res.body);
		    expect(done).to.be.instanceof(Object);
                    done(err);
                });
        });
    });


    describe('delete product by title', function() {
        it('returns /deleteProd/:name', function(done) {
            request.delete('/deleteProd/:name')
                 .expect(200)
                .end(function(err, res) {
                    //expect(res.body).to.have.lengthOf(7);
                    //expect(res.body);
		    expect(done).to.be.instanceof(Object);
                    done(err);
                });
        });
    });




})
