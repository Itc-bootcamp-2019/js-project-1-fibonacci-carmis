// TODO fix logical errors in calculator 0, 1 are not correct
// TODO construct a function to handle edge-cases it breaks now -n, 0, 1, abc, etc. 

let calculator = {
    calculateFibonacci: function(num) {
        let first = 0,
            second = 1,
            next = 1;
        for (let i = 2; i <= num; i++) {
            next = first + second;
            first = second;
            second = next;
        }
        return next;
    }
}


document.getElementById("x").innerText = "6";
document.getElementById("y").innerText = calculator.calculateFibonacci(6);


// An optional solution intended for pandas style sulution
// function calculateFibonacci(num) {
//     let fiboList = [1, 1]; // creating the entire sequence up to n - not good for huge numbers
//     for (let i = 2; i < num; i++) {
//         fiboList[i] = fiboList[i - 1] + fiboList[i - 2];
//     }
//     return fiboList[num - 1];
// }