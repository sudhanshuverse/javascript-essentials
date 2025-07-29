// 1. setTimeout Examples

// Function reference
function showMessage() {
    console.log("setTimeout: Hello from function!");
}
const timer1 = setTimeout(showMessage, 1000);

// Arrow function
const timer2 = setTimeout(() => {
    console.log("setTimeout: Hello from arrow function!");
}, 2000);

// 2. setInterval Example
const intervalId = setInterval(() => {
    console.log("setInterval: Running every 5 seconds.");
}, 5000);

// 3. Clearing Timers
setTimeout(() => {
    clearTimeout(timer1);
    clearInterval(intervalId);
    console.log("Timers cleared after 10 seconds.");
}, 10000);

// 4. Event Loop Demo
console.log("👋 Synchronous: Start");

function hello() {
    console.log("Callback: Hello World");
}

for (let i = 1; i <= 3; i++) {
    console.log(` Synchronous: ${i}`);
}

hello();

setTimeout(hello, 0); // Pushed to Web API and executed later

console.log("Synchronous: End");

// Output:
// Synchronous: Start
// Synchronous: 1
// Synchronous: 2
// Synchronous: 3
// Callback: Hello World
// Synchronous: End
// Callback: Hello World (from setTimeout)
