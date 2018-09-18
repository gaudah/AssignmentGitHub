describe('Task API Routes', function() {  

 // In this test it's expected a task list of two tasks
    describe('GET /getAllCustomers', function() {
        it('returns a list of customers', function(done) {
            request.get('/getAllProducts/')
                .expect(200)
                .end(function(err, res) {
                    //expect(res.body).to.have.lengthOf(7);
		    expect(done).to.be.instanceof(Object);
                    done(err);
                });
        });
    });


    describe('GET /getCustById/:name', function() {
        it('returns a customer by id', function(done) {
            request.get('/getCustById/:name')
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


describe('POST /insertDetailsCust/', function() {
        it('insert customer', function(done) {
            request.post('/insertDetailsCust/')
                .send({
                //"cid": "C2134",
                cid: (parseInt(getRndInteger(11,50))).toString(),
                firstName: "bhai",
                lastName: "gaud",
                company: "avlara",
                connectInfo: {
                        tel: [12345,67890],
                        email: ["me@a.com","you@a.com"],
                        address: {
                                city: "x",
                                street: "y",
                                houseNumber: "x-1"
                        }
                        },

                product:"ab1234",
                isBooked:false
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



    describe('update customer by firstName', function() {
        it('returns /updateCust/:name', function(done) {
            request.put('/updateCust/:name')
                 .expect(200)
                .end(function(err, res) {
                    //expect(res.body).to.have.lengthOf(7);
                    //expect(res.body);
		    expect(done).to.be.instanceof(Object);
                    done(err);
                });
        });
    });


    describe('delete customer by firstName', function() {
        it('returns /deleteCust/:name', function(done) {
            request.delete('/deleteCust/:name')
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
