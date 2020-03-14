function displayErrorMessage() {
  alterStyle("invalid-input-display", "block", "show");
  alterStyle("input-number", "font-cust1", "font-cust2");
}

function toggleSpinner(id) {
  let element = document.getElementById(id);
  element.classList.toggle("spinner-border");
}

function alterStyle(id, classId1, classId2) {
  let element = document.getElementById(id);
  element.classList.replace(classId1, classId2);
}

function clearResultList() {
  let listNode = document.getElementById("result-list");
  while (listNode.lastElementChild) {
    listNode.removeChild(listNode.lastElementChild);
  }
}

function clearResults() {
  document.getElementById("value").innerText = "";
  alterStyle("invalid-input-display", "show", "block");
  alterStyle("value", "result-42", "my-font-result");
  alterStyle("input-number", "font-cust2", "font-cust1");
}
