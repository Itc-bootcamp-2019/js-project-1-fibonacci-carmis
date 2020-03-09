let startCalculatorOnClick = document.getElementById("start-calculator");
startCalculatorOnClick.addEventListener("click", getFiboServer);

function getFiboServer() {
  // toggling spinner
  document.getElementById("calculated-result").innerText = "";
  document.getElementById("calculated-result").classList.add("spinner-border");

  let url = "http://localhost:5050/fibonacci/";
  let params = document.getElementById("input-number").value;

  fetch(`${url}${params}`)
    .then(function(response) {
      if (!response.ok) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      } else {
        response.json().then(function(data) {
          document
            .getElementById("calculated-result")
            .classList.remove("spinner-border");
          document.getElementById("calculated-result").innerText = data.result;
        });
      }
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
}

