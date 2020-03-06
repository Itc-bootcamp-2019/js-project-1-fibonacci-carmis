function simpleCalculate(inputVal) {
  inputVal = getInputValue("input-number");
  outputVal = calculateFibonacci(inputVal);
  document.getElementById("calculated-result").innerText = outputVal;
}

function calculateFibonacci(num) {
  let a = 1,
    result = 0,
    temp;
  // assumning that the sequence begins with 0, else while num >= 0
  while (num > 0) {
    temp = a;
    a = a + result;
    result = temp;
    num--;
  }

  return result;
}

function getInputValue(inputId) {
  // Selecting the input element ID and getting its value
  let inputVal = document.getElementById(inputId).value;
  return inputVal;
}

let startCalculatorOnClick = document.getElementById("start-calculator");
startCalculatorOnClick.addEventListener("click", simpleCalculate);
