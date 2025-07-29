# 🚀 JavaScript: Arrow Functions and Looping Constructs

This document explains **Arrow Functions** and various **JavaScript loops** including `for`, `for...of`, `for...in`, and `forEach`.

---

## 📌 1. Arrow Functions

Arrow functions are a concise way to write functions in JavaScript. They are introduced in ES6 and provide a shorter syntax compared to traditional function expressions.

### ✅ Syntax

```javascript
// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function (explicit return)
const add = (a, b) => {
    return a + b;
}

// Arrow function (implicit return)
const add = (a, b) => a + b;
```

### 🔍 Important Points

- Arrow functions do not bind their own this
- Do not have their own arguments object
- Cannot be used with new
- Best for short callbacks or inline functions

### ✅ When to Use

- In callback functions (e.g., map, filter, forEach)
- When you don't need to use this, super, or arguments

### 🔄 2. JavaScript Looping Constructs
 
#### 2.1 for Loop
Used for traditional index-based iteration.
```js
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
```

#### 2.2 for...of Loop
Used for iterating values of iterable objects (Array, String, Set, Map, etc.)
```js
for (const value of array) {
    console.log(value);
}
```

#### 2.3 for...in Loop
Used for iterating over the keys of an object.
```js
const obj = { name: "John", age: 25 };
for (const key in obj) {
    console.log(key + ": " + obj[key]);
}
```

#### 2.4 forEach() Method
Used to execute a function once for each array element. It is a method of the Array object.
```js
array.forEach(function(value, index) {
    console.log(index + " → " + value);
});

```

## 🧠 When to Use Which Loop

- **for**	When you need index control, condition breaking, or skipping.
- ***for...of***	When you want to loop through values of an iterable.
- ***for...in***	When you want to loop through keys of an object.
- ***forEach()***	When you want to apply a function to every element of an array.


## 📊 Difference Table

| Feature               | `for`         | `for...of`                           | `for...in`                                | `forEach()`               |
|------------------------|----------------|--------------------------------------|--------------------------------------------|---------------------------|
| **Data Type**          | Array, String  | Iterable (Array, Set, String)        | Object (also arrays, but not recommended)  | Array only                |
| **Iterates Over**      | Index          | Values                               | Keys                                       | Values                    |
| **Can Break/Continue** | ✅ Yes         | ✅ Yes                                | ✅ Yes                                     | ❌ No                     |
| **Return Value**       | None           | None                                  | None                                       | `undefined`               |
| **Use Case**           | Indexed access | Value iteration                       | Key/property access                        | Side-effects / logging    |
| **Supports async/await** | ✅ Yes       | ✅ Yes                                | ✅ Yes                                     | ❌ Not directly           |
