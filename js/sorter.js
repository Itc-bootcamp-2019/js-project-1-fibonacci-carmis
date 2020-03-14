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
