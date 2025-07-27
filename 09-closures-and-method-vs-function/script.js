// Closure Example
function outer() {
    const a = 4;
    function parent() {
        const b = 6;
        function add() {
            console.log(a + b); // Accessing a and b from outer scopes
        }
        return add;
    }
    return parent(); // returns add function
}

const add1 = outer(); // assign the returned function to add1
add1(); // Output: 10


// Method vs Function Example

const maths = {
    E: 2.718281828459045,
    add: function (a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    square(a) {
        return a * a;
    },
    cube(a) {
        return a * a * a;
    }
};

// Method calls
console.log(maths.add(2, 3));      // 5
console.log(maths.square(4));      // 16
