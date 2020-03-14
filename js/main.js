window.addEventListener("DOMContentLoaded", sortResultsbyDateDesc);
document.getElementById("input-number").addEventListener("input", clearResults);
document
  .getElementById("start-calculator")
  .addEventListener("click", callCalculator);
document
  .getElementById("number-asc")
  .addEventListener("click", sortResultsbyNumberAsc);
document
  .getElementById("number-dsc")
  .addEventListener("click", sortResultsbyNumberDsc);
document
  .getElementById("date-asc")
  .addEventListener("click", sortResultsbyDateAsc);
document
  .getElementById("date-dsc")
  .addEventListener("click", sortResultsbyDateDesc);

function callCalculator() {
  let checkBox = document.getElementById("boxCheck");
  if (checkBox.checked) {
    calculateFromServer();
  } else {
    calculateFromLocal();
  }
}

function calculateFromLocal() {
  let num = document.getElementById("input-number").value;
  if (isNotValid(num)) {
    displayErrorMessage();
  } else {
    document.getElementById("value").innerText = calculateFibonacci(num);
  }
}

function calculateFromServer() {
  let inputNum = document.getElementById("input-number");
  let resultValue = document.getElementById("value");
  let url = "http://localhost:5050/fibonacci/";
  let params = inputNum.value;
  if (isNotValid(params)) {
    displayErrorMessage();
  } else {
    toggleSpinner("calculated-result");
    fetch(`${url}${params}`).then(function(response) {
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

function sortResultsbyNumberAsc() {
  clearResultList();
  toggleSpinner("loading");
  let url = "http://localhost:5050/getFibonacciResults";
  fetch(url).then(response => {
    response.json().then(data => {
      let results = data.results;
      let sortedResultsArray = results.sort((a, b) => a.number - b.number);
      for (let currentObject of sortedResultsArray) {
        document.getElementById(
          "result-list"
        ).innerHTML += `<li>The Fibonnaci Of ${currentObject.number} is ${
          currentObject.result
        }. Calculated at: ${new Date(currentObject.createdDate)}</li>`;
      }
      toggleSpinner("loading");
    });
  });
}

function sortResultsbyNumberDsc() {
  clearResultList();
  toggleSpinner("loading");
  let url = "http://localhost:5050/getFibonacciResults";
  fetch(url).then(response => {
    response.json().then(data => {
      let results = data.results;
      let sortedResultsArray = results.sort((a, b) => b.number - a.number);
      for (let currentObject of sortedResultsArray) {
        document.getElementById(
          "result-list"
        ).innerHTML += `<li>The Fibonnaci Of ${currentObject.number} is ${
          currentObject.result
        }. Calculated at: ${new Date(currentObject.createdDate)}</li>`;
      }
      toggleSpinner("loading");
    });
  });
}

function sortResultsbyDateAsc() {
  clearResultList();
  toggleSpinner("loading");
  let url = "http://localhost:5050/getFibonacciResults";
  fetch(url).then(response => {
    response.json().then(data => {
      let results = data.results;
      let sortedResultsArray = results.sort(
        (a, b) => a.createdDate - b.createdDate
      );
      for (let currentObject of sortedResultsArray) {
        document.getElementById(
          "result-list"
        ).innerHTML += `<li>The Fibonnaci Of ${currentObject.number} is ${
          currentObject.result
        }. Calculated at: ${new Date(currentObject.createdDate)}</li>`;
      }
      toggleSpinner("loading");
    });
  });
}

function sortResultsbyDateDesc() {
  clearResultList();
  toggleSpinner("loading");
  let url = "http://localhost:5050/getFibonacciResults";
  fetch(url).then(response => {
    response.json().then(data => {
      let results = data.results;
      let sortedResultsArray = results.sort(
        (a, b) => b.createdDate - a.createdDate
      );
      for (let currentObject of sortedResultsArray) {
        document.getElementById(
          "result-list"
        ).innerHTML += `<li>The Fibonnaci Of ${currentObject.number} is ${
          currentObject.result
        }. Calculated at: ${new Date(currentObject.createdDate)}</li>`;
      }
      toggleSpinner("loading");
    });
  });
}

function clearResultList() {
  let listNode = document.getElementById("result-list");
  while (listNode.lastElementChild) {
    listNode.removeChild(listNode.lastElementChild);
  }
}

function alterStyle(id, classId1, classId2) {
  let element = document.getElementById(id);
  element.classList.replace(classId1, classId2);
}

function clearResults() {
  document.getElementById("value").innerText = "";
  alterStyle("invalid-input-display", "show", "block");
  alterStyle("value", "result-42", "my-font-result");
  alterStyle("input-number", "font-cust2", "font-cust1");
}

function toggleSpinner(id) {
  let element = document.getElementById(id);
  element.classList.toggle("spinner-border");
}

function isNotValid(input) {
  if (input < 0 || input > 50) {
    return true;
  } else {
    return false;
  }
}

function displayErrorMessage() {
  alterStyle("invalid-input-display", "block", "show");
  alterStyle("input-number", "font-cust1", "font-cust2");
}
