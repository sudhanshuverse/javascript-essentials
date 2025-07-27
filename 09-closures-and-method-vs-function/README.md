# JavaScript: Closures & Method vs Function

This project demonstrates two important JavaScript concepts:
1. **Closures**
2. **Difference between Methods and Functions**


## 🧠 1. Closures in JavaScript

### ✅ Definition

A **closure** is a function that "remembers" the variables from its **outer lexical scope** even when the outer function has finished executing.

Closures allow inner functions to access variables of outer functions even after the outer function has returned.

---

### ✅ Example:

```js
function outer() {
    const a = 4;
    function parent() {
        const b = 6;
        function add() {
            console.log(a + b);
        }
        return add;
    }
    return parent();
}

const add1 = outer();
add1(); // Output: 10
```

###  Output:
10


### 🔍 What's Happening:
- outer() defines a = 4
- parent() defines b = 6 and returns the add() function
- add() accesses both a and b even after outer() and parent() have finished
- add1 holds the returned function with closure over a and b

## 🧩 2. Method vs Function in JavaScript

- **Function**	A block of code that can be called independently.
- **Method**	A function defined inside an object, invoked using the object reference.

## 🔁 Golden Rule:
Every method is a function, but not every function is a method.

```js
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
console.log(maths.add(2, 3));      // Output: 5
console.log(maths.square(4));      // Output: 16
```

### ✅ Output:
5
16


## ✨ Key Points
### 🔐 Closure:

- Retains access to outer scope variables
- Used in private state, callbacks, and functional programming
- Creates persistent data

### 🧩 Method vs Function:

- Methods are functions bound to objects
- Methods can use this to access object properties
- Functions are not always tied to an object

## 📊 Comparison Table

| Feature     | Closure                          | Function               | Method                             |
|-------------|----------------------------------|------------------------|------------------------------------|
| **Scope**   | Remembers outer function scope   | Global or local scope | Inside an object                   |
| **Returns** | Usually another function         | Any value             | Usually a value related to object |
| **Uses `this`** | Not necessarily              | No                     | Yes (object context)              |
| **Example** | `function outer() {}`            | `function foo() {}`    | `obj.foo = function() {}`         |
