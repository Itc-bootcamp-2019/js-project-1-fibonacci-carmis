document
  .getElementById("start-calculator")
  .addEventListener("click", getFiboServer);
document.getElementById("input-number").addEventListener("input", clearResults);
window.addEventListener("DOMContentLoaded", getPreviousCalculations);

function getFiboServer() {
  let inputNum = document.getElementById("input-number");
  let resultValue = document.getElementById("value");
  let url = "http://localhost:5050/fibonacci/";
  let params = inputNum.value;
  if (params > 50) {
    toggleStyle("invalid-input-display", "block", "show");
    toggleStyle("input-number", "font-cust1", "font-cust2");
  } else {
    toggleSpinner("calculated-result");
    fetch(`${url}${params}`).then(function(response) {
      toggleSpinner("calculated-result");
      if (!response.ok) {
        response.text().then(function(text) {
          toggleStyle("value", "my-font-result", "result-42");
          resultValue.innerText = `Server Error: ${text}`;
          return;
        });
      } else {
        response.json().then(function(data) {
          resultValue.innerText = data.result;
          return;
        });
      }
    });
  }
}

function toggleSpinner(id) {
  let element = document.getElementById(id);
  element.classList.toggle("spinner-border");
}

function toggleStyle(id, classId1, classId2) {
  let element = document.getElementById(id);
  element.classList.replace(classId1, classId2);
}

function clearResults() {
  document.getElementById("value").innerText = "";
  toggleStyle("invalid-input-display", "show", "block");
  toggleStyle("value", "result-42", "my-font-result");
  toggleStyle("input-number", "font-cust2", "font-cust1");
}

function getPreviousCalculations() {
  toggleSpinner("loading");
  let url = "http://localhost:5050/getFibonacciResults";
  fetch(url).then(response => {
    response.json().then(data => {
      let results = data.results;
      let sortedResults = results.sort((a, b) => b.createdDate - a.createdDate)
      for (let currentResult of sortedResults) {
        document.getElementById("loading").innerHTML += `<li>The Fibonnaci Of ${
          currentResult.number
        } is ${currentResult.result}. Calculated at: ${new Date(
          currentResult.createdDate
        )}</li>`;
      }
      toggleSpinner("loading");
      console.log("Checkout this JSON! ", data);
    });
  });
}
