# JavaScript Execution Context

This project helps you understand how JavaScript runs your code step by step. It's a basic example that shows what happens when you run a script, how functions are called, and how variables are handled.

---

## 📘 What is Execution Context?

An **execution context** is the environment where JavaScript code runs.

It controls:
- What values and variables can be used.
- What code gets run and when.
- How functions are managed.

---

## 🔁 Two Phases of Execution Context

When JavaScript runs your code, it does it in two steps (phases):

### 1. Memory Creation Phase
- JavaScript scans the code.
- It stores all variables and function names in memory.
- Variables are set to `undefined` (for now).
- Functions are stored with their full code (this is called hoisting).

### 2. Code Execution Phase
- Now JavaScript runs your code line by line.
- Variables get their real values.
- Functions are called and executed.

---

## 🧠 Types of Execution Context

There are 3 types:

1. **Global Execution Context (GEC)**  
   This is created automatically when the page loads. It runs the main code (not inside a function).

2. **Function Execution Context (FEC)**  
   Created every time a function is called. Each function gets its own space to run.

3. **Eval Execution Context**  
   This happens when you use `eval()` (not common, and usually avoided).

---

## 💻 Example Code

This code shows how execution context works with variables and functions:

```js
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
```
