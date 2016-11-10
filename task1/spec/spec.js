var app = require('../script/task.js');

describe("it should be exponentiation of positive numbers", function() {
  it("and so is a spec", function() {
    var result;
    result = app.exponentiation(2,4);
    expect(result).toBe(16);
  });
});
    
describe("it should be exponentiation of negative numbers", function() {
  it("and so is a spec", function() {
    var result;
    result = app.exponentiation(2,-4);
    expect(result).toBe(0.0625);
  });
});

describe("it should be exponentiation of zero", function() {
  it("and so is a spec", function() {
    var result;
    result = app.exponentiation(100, 0);
    expect(result).toBe(1);
  });
});


describe("check whether the number is entered", function() {
  it("and so is a spec", function() {
    var numberString = 'fhgkndl';
    var number = parseFloat(numberString);
    expect(number).toBeNaN();
  });
});

  describe("resume", function() {
    it("should throw an exception if song is already playing", function() {
     var numberString = 'fhgkndl';
     var number = parseFloat(numberString);

      expect(function() {
        app.checkValue(number);
      }).toThrowError("enter valid number");
    });
  });

