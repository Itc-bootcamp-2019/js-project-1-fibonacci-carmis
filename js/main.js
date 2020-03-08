function getFiboServer() {
  let url = "http://localhost:5050/fibonacci/";
  let params =  document.getElementById("input-number").value;
  
  fetch(`${url}+${params}`)
    .then(function(response) {
      // server response ERROR
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }
      // response OK
      response.json().then(function(data) {
        document.getElementById("calculated-result").innerText = data.result;
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
}

let startCalculatorOnClick = document.getElementById("start-calculator");
startCalculatorOnClick.addEventListener("click", getFiboServer);


