// Block Scope
console.log("1. Block Scope:");
{
    let x = "Hello";
    const y = "World";
    console.log(x, y); // inside block
}
// console.log(x, y);  Not accessible here
var z = "I'm var";
console.log(z); // var is not block scoped



// Lexical Scope
console.log("\n2. Lexical Scope:");
function outer() {
    let name = "JavaScript";
    function inner() {
        console.log("Name is:", name); //  Accesses outer variable
    }
    inner();
}
outer();



// Closures
console.log("\n3. Closures:");
function counter() {
    let count = 0;
    return function () {
        count++;
        console.log("Count:", count);
    };
}
let add = counter();
add(); // 1
add(); // 2



// Module Scope (simulated)
console.log("\n4. Module Scope:");
const Module = (function () {
    let secret = "Hidden Data";
    return {
        show: function () {
            console.log("Secret:", secret);
        },
    };
})();
Module.show();
// console.log(Module.secret);  Not accessible
