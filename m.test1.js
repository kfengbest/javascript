describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      expect.eql(1, [1,2,3].indexOf(0));
    })
  })
})

describe('Expect.js', function(){
	describe('ok', function(){
		it('1 should be ok', function(){
			expect(1).to.be.ok();
		})
		it('true should be ok', function(){
			expect(true).to.be.ok();
		})
	});
	describe('equal', function(){
		it('asserts === equality', function(){
			expect(1).to.be(1);
		})

	});
	describe('eql', function(){
		it('asserts loose equality that works with objects', function(){
			expect({a:'b'}).to.eql({a:'b'});
		});
	});
})

describe('Chai.js', function(){
	describe('expect', function(){
		it('equal', function(){
			chai.expect(1).to.equal(1);
		});
	});
	describe('should', function(){
		it('be a', function(){
			chai.should();
			"".should.be.a("string");
		});
	});
	describe('assert', function(){
		it('equal', function(){
			chai.assert.equal("string", "string");
		});
	});
});