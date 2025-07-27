function hi() {
    console.log("Hello");
}

var sayHi = function() {
    console.log("Hi, I am from sayHi (function expression).");
};

function callSayHi() {
    try {
        sayHi();
    } catch (e) {
        console.error("Error: ", e.message);
    }
}

var declaredVar;
console.log("Declared but not assigned:", declaredVar); // undefined