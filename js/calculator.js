function calculateFromLocal() {
  let num = document.getElementById("input-number").value;
  if (isNotValid(num)) {
    displayErrorMessage();
  } else {
    document.getElementById("value").innerText = calculateFibonacci(num);
  }
}

function calculateFromServer() {
  let url = "http://localhost:5050/fibonacci/";
  let numberToCalculate = document.getElementById("input-number").value;
  let resultValue = document.getElementById("value");
  
  if (isNotValid(numberToCalculate)) {
    displayErrorMessage();
  } else {
    toggleSpinner("calculated-result");
    fetch(`${url}${numberToCalculate}`).then(function(response) {
      toggleSpinner("calculated-result");
      if (!response.ok) {
        response.text().then(function(text) {
          alterStyle("value", "my-font-result", "result-42");
          resultValue.innerText = `Server Error: ${text}`;
          return;
        });
      } else {
        response.json().then(function(data) {
          resultValue.innerText = data.result;
          sortResultsbyDateDesc();
          return;
        });
      }
    });
  }
}

function calculateFibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return calculateFibonacci(num - 1) + calculateFibonacci(num - 2);
  }
}

function isNotValid(input) {
  if (input < 0 || input > 50) {
    return true;
  } else {
    return false;
  }
}
