let startCalculatorOnClick = document.getElementById("start-calculator");
startCalculatorOnClick.addEventListener("click", getFiboServer);

function getFiboServer() {
  let inputNum = document.getElementById("input-number");
  let resultValue = document.getElementById("value");

  let url = "http://localhost:5050/fibonacci/";
  let params = inputNum.value;

  if (params > 50) {
    // do error
    toggleStyle("invalid-input-display", "block", "show")

  } else {
    toggleStyle("invalid-input-display", "show", "block")
    toggleSpinner("calculated-result");

    fetch(`${url}${params}`).then(function(response) {
      if (!response.ok) {
        response.text().then(function(text) {
          toggleStyle("value", "my-font-result", "result-42");
          resultValue.innerText = `Server Error: ${text}`;
          toggleSpinner("calculated-result");
          return;
        });
      } else {
        toggleStyle("value", "result-42", "my-font-result");
        response.json().then(function(data) {
          resultValue.innerText = data.result;
          toggleSpinner("calculated-result");
          return;
        });
      }
    });
  }
}

function toggleVisibilityByElementId(id) {
  let element = document.getElementById(id);
  if (element.style.display == "block") element.style.display = "none";
  else element.style.display = "block";
}

function toggleSpinner(id) {
  let element = document.getElementById(id);
  element.classList.toggle("spinner-border");
}

function toggleStyle(id, classId1, classId2) {
  let element = document.getElementById(id);
  element.classList.replace(classId1, classId2);
}
