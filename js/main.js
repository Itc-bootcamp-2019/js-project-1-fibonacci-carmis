window.addEventListener("DOMContentLoaded", sortResultsbyDateDesc);

document.getElementById("input-number").addEventListener("input", clearResults);

document.getElementById("start-calculator").addEventListener("click", callCalculator);

document.getElementById("number-asc").addEventListener("click", sortResultsbyNumberAsc);
document.getElementById("number-dsc").addEventListener("click", sortResultsbyNumberDsc);
document.getElementById("date-asc").addEventListener("click", sortResultsbyDateAsc);
document.getElementById("date-dsc").addEventListener("click", sortResultsbyDateDesc);

function callCalculator() {
  let checkBox = document.getElementById("boxCheck");
  if (checkBox.checked) {
    calculateFromServer();
  } else {
    calculateFromLocal();
  }
}
