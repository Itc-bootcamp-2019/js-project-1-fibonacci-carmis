function calculateFibonacci(num) {

    let first = 0,
    second = 1,
    next = 1;

    for (let i = 2; i <= num; i++) {
        next = first + second;
        first = second;
        second = next;
    }
    return next;
};


// An optional solution intended for a pandas style array sulution
// function calculateFibonacci(num) {

//     let fiboList = [1, 1]; // creating the entire sequence up to n - not good for huge numbers

//     for (let i = 2; i < num; i++) {
//         fiboList[i] = fiboList[i - 1] + fiboList[i - 2];
//     }

//     return fiboList[num - 1];
// }
