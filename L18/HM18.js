
console.log("1.  ==============");
{
  function plus(a, b) {
    return a + b;
  }

  function minus(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    if (b === 0) {
      return "На ноль делить нельзя";
    }
    return a / b;
  }


  console.log(plus(2, 20));       
  console.log(minus(24, 2));      
  console.log(multiply(2, 11));   
  console.log(divide(44, 2));     
}

console.log("2.  ==================");
{
  function plus(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }

  function calculator(num1, num2, operation) {
    return operation(num1, num2);
  }

  console.log(calculator(10, 10, plus));     
  console.log(calculator(10, 10, multiply)); 
}

console.log("3.  ================");
{
  function plus(a, b) {
    return a + b;
  }

  function minus(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    if (b === 0) {
      return "На ноль делить нельзя";
    }
    return a / b;
  }

  function calculator(num1, num2, operation) {
    return operation(num1, num2);
  }

  console.log(calculator(10, 2, plus));     
  console.log(calculator(10, 2, minus));    
  console.log(calculator(10, 2, multiply)); 
  console.log(calculator(10, 2, divide));   
}

console.log("4. ===================");
{
  const plus = function (a, b) {
    return a + b;
  };

  const minus = function (a, b) {
    return a - b;
  };

  const multiply = function (a, b) {
    return a * b;
  };

  const divide = function (a, b) {
    if (b === 0) {
      return "На ноль делить нельзя";
    }
    return a / b;
  };

  const calculator = function (num1, num2, operation) {
    return operation(num1, num2);
  };

  console.log(calculator(10, 2, plus));     
  console.log(calculator(10, 2, minus));    
  console.log(calculator(10, 2, multiply)); 
  console.log(calculator(10, 2, divide));   
}

console.log("5.* ===================");
{
  const plus = (a, b) => a + b;
  const minus = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => (b === 0 ? "На ноль делить нельзя" : a / b);

  const calculator = (num1, num2, operation) => operation(num1, num2);

  console.log(calculator(10, 2, plus));     
  console.log(calculator(10, 2, minus));    
  console.log(calculator(10, 2, multiply)); 
  console.log(calculator(10, 2, divide));   
}