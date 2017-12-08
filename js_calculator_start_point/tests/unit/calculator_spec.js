var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('should be able to add to the running total', function(){

    calculator.previousTotal = 2
    calculator.add(2)

    assert.equal(4, calculator.runningTotal);
  })

  it('should be able to work with negative numbers', function(){

    calculator.previousTotal = -2
    calculator.add(-2)

    assert.equal(-4, calculator.runningTotal);
  })

  it('should be able to add to subtract from the running total', function(){

    calculator.previousTotal = 3
    calculator.subtract(2)

    assert.equal(1, calculator.runningTotal);
  })

  it('should be able to add to multiply', function(){

    calculator.previousTotal = 3
    calculator.multiply(3)

    assert.equal(9, calculator.runningTotal);
  })

  it('should be able to add to divide', function(){

    calculator.previousTotal = 9
    calculator.divide(3)

    assert.equal(3, calculator.runningTotal);
  })

  it('should be able unable to divide by zero', function(){

    calculator.previousTotal = 5
    calculator.divide(0)

    assert.equal("You can't divide by zero", calculator.runningTotal);
  })

  it('should be able to number click', function(){

    calculator.numberClick(2);
    calculator.numberClick(2);
    calculator.numberClick(2);

    assert.equal(222, calculator.runningTotal);
  })

  it('should be able to operator click', function(){

    calculator.operatorClick(calculator.add(2));
    calculator.operatorClick(calculator.add(4));
    calculator.operatorClick(calculator.subtract(3));

    assert.equal(3, calculator.runningTotal);
  })

  it('should be able to clear the numbers', function(){

    calculator.numberClick(2);
    calculator.numberClick(2);
    calculator.numberClick(2);
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  })

  it('should show zero when you click zero if there is already zero in the box', function(){

    calculator.numberClick(0);
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  })

});
