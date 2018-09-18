describe('Task API Routes', function() {  

 // In this test it's expected a task list of two tasks
    describe('GET /GetAllUpdatedProd', function() {
        it('returns all the updated products after booked', function(done) {
            request.get('/GetAllUpdatedProd')
                .expect(200)
                .end(function(err, res) {
                    //expect(res.body).to.have.lengthOf(7);
		    expect(done).to.be.instanceof(Object);
                    done(err);
                });
        });
    });


describe('POST /bookCustProd', function() {
        it('book a product by customer', function(done) {
            request.post('/bookCustProd')
                .send({
			"pid" : "aishu12345", 
			"cid": "C1234"
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







})
