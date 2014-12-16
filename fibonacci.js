/*
 * Andrews solution for generating the Fibonacci Sequence in JavaScript.
 */

var fibonacci = function (countUntil){
    // fib is a value in the Sequence
    var fib = 1;
    var fib_previous1 = 0, fib_previous2 = 0;

    console.log(fib); // because the Sequence starts with 1

    // counter starts at 2, because we just printed the first number
    var counter = 2;

    while (counter <= countUntil) {
        fib_previous2 = fib_previous1;
        fib_previous1 = fib;
        fib = fib_previous1 + fib_previous2;
        console.log(fib);
        counter += 1;
    }
};

fibonacci(10);