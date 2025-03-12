let calculator = localStorage.getItem('calculator') || '';
      document.querySelector('.js-Display').innerHTML = calculator;

      if(calculator === null){
        let calculator = ' ';
      }
      function updateCalculation(nums){
        calculator = calculator + nums;
        localStorage.setItem('calculator', calculator);
        document.querySelector('.js-Display').innerHTML = calculator;
      }