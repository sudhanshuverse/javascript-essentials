# 📚 JavaScript Call Stack

## 🔹 What is a Call Stack?

The **Call Stack** is a fundamental concept in JavaScript used to keep track of function calls during execution. It's a **LIFO (Last In, First Out)** stack structure, where:
- Functions are **pushed** onto the stack when called.
- Functions are **popped** off when they return.

The JavaScript engine uses the call stack to know **what function is currently being executed** and **what to return to** after a function finishes.

---

## 📘 Types of Call Stack Scenarios

1. **Normal Function Calls**  
   Functions call each other in a predictable sequence and exit cleanly.

2. **Recursive Calls**  
   A function calls itself. If there's no base case to stop recursion, it leads to **stack overflow** (error).

---

## ✅ Why is the Call Stack Important?

- Keeps track of the **order of function execution**
- Helps in **debugging** (via stack traces in dev tools)
- Essential for **recursion and nested function calls**
- Manages **memory allocation** during function execution

---

## 💡 Example

```js
function sayHi() {
    const a = 10;
    const b = 20;
    add(5, 7);
}

function add(x, y) {
    kuchBhi();
    return x + y;
}

function kuchBhi() {
    console.log("Kuch Bhi");
}

sayHi();
