// Debugger to observe Execution Context step-by-step
debugger;

fun1();

var userName = "Hey";
var age = 20;

function fun1() {
    const a = 20;
    const b = 30;
    const result = fun2(a, b);
    console.log("Result from fun2:", result);
}

function fun2(a, b) {
    return a + b;
}