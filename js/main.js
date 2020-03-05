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
document.getElementById("x").innerText = "6";
document.getElementById("y").innerText = calculateFibonacci(6);
