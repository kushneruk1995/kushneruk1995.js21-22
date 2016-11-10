var app = {
  enterValue : function() {
      var numberString = prompt("Введіть число, яке необхідно піднести до степіня");
      var number = parseFloat(numberString);
      this.checkValue(number);
      console.log(" число=", numberString);
      var powString = prompt("Введіть ступінь, до якого необхідно піднести число");
      var pow = parseFloat(powString);
      this.checkValue(pow);
      console.log(" степінь=", pow);
      var result;
      this.exponentiation(number, pow);
  },

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

// app.enterValue();

module.exports = app;


