var FtoC = function() {
      var one = document.querySelector('.js-one');
      var first = parseInt(one.value);
        var result1 = (first - 32) / 1.8;
        if (first !== NaN) {
          alert(result1);
        } 
        else {
          alert(" You need to input a value.");
        }
    };

  var CtoF = function() {
      var two = document.querySelector('.js-two');
      var second = parseInt(two.value);
      var result2 = (second * 1.8) + 32;
      if (second !== NaN) {
        alert(result2);
      } 
      else {
        alert(" You need to input a value.");
      }
    };