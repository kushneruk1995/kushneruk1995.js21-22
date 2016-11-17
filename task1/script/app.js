var app = {
  checkValue: function (checkValue) {
      if ( isNaN(checkValue)) {

        // alert("Введіть дійсні числа");
        throw Error("enter valid number");
        this.enterValue();
      } else {
        return checkValue;
      }
  }, 
  exponentiation : function (number, pow) {
      if (pow > 0) {
        result = number;

        for (var i = 0; i < pow-1; i++) {
        result = number*result;
        }

        console.log(result);

      } else if (pow === 0) {
        result = 1;
        console.log(result);

      } else if (pow < 0) {
        result=1/(number);

        for (var i = -1; i > pow; i--) {
          result = result/number;
          }

          console.log(result);
        }

        return result;
  }
};

module.exports = app;
