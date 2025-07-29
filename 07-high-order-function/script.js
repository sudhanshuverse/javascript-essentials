// 1. Simple Example
function runBasicExample() {
    function greet(callback) {
        console.log("Executing the greet function...");
        callback();
    }

    function sayHello() {
        console.log("Hello, I am the callback function!");
    }

    const output = document.getElementById("basic-example-output");
    output.innerText = "Executing the greet function...\nHello, I am the callback function!";
    console.log("Executing the greet function...");
    console.log("Hello, I am the callback function!");
    greet(sayHello);
}

// Next-Level Example
function runAdvancedExample() {
    function multiplier(factor) {
        return function (number) {
            return number * factor;
        };
    }

    const double = multiplier(2);
    const triple = multiplier(3);

    const output = document.getElementById("advanced-example-output");
    output.innerText = `Double of 5: ${double(5)}\nTriple of 5: ${triple(5)}`;
    console.log(double(5)); // 10
    console.log(triple(5)); // 15
}

// Array Example
function runArrayExample() {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(num => num * 2);
    const evens = numbers.filter(num => num % 2 === 0);

    const output = document.getElementById("array-example-output");
    output.innerText = `Doubled numbers: ${doubled}\nEven numbers: ${evens}`;
    console.log("Doubled numbers:", doubled);
    console.log("Even numbers:", evens);
}

// Custom Filter Example
function runCustomFilterExample() {
    function customFilter(array, condition) {
        const result = [];
        for (let item of array) {
            if (condition(item)) {
                result.push(item);
            }
        }
        return result;
    }

    const numbers = [1, 2, 3, 4, 5, 6];
    const isEven = num => num % 2 === 0;
    const greaterThanThree = num => num > 3;

    const output = document.getElementById("custom-filter-output");
    output.innerText = `Even numbers: ${customFilter(numbers, isEven)}\nNumbers > 3: ${customFilter(numbers, greaterThanThree)}`;
    console.log("Even numbers:", customFilter(numbers, isEven));
    console.log("Numbers > 3:", customFilter(numbers, greaterThanThree));
}