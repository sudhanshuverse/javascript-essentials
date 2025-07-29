# 🧠 JavaScript Hoisting Explained

This simple project visually explains how **JavaScript hoisting** works with variables and functions using clear definitions, code examples, and styled HTML.

## 📌 What is Hoisting?

**Hoisting** is JavaScript's behavior of moving declarations (not initializations) to the top of their scope before code execution.

### 🔄 Two Phases of Execution:

1. **Memory Creation Phase**
   - Allocates memory for all variables and functions
   - `var` is set to `undefined`
   - `let` and `const` are hoisted but not initialized (in Temporal Dead Zone)
   - Function declarations are fully hoisted

2. **Execution Phase**
   - Code runs line-by-line
   - Variables are assigned values
   - Functions are executed

---

## ✅ Examples

### 1. Function Hoisting (Works Before Definition)
```js
hi(); // ✅ Output: Hello

function hi() {
  console.log("Hello");
}
```

### 2. Function Expression (Not Hoisted)
```js
hi(); // ❌ Error: Cannot access 'hi' before initialization

const hi = function () {
  console.log("Hello");
};
```

## 🔥 Temporal Dead Zone (TDZ)

### 📌 What is the Temporal Dead Zone?

The **Temporal Dead Zone (TDZ)** is the time between the **start of a block** and the point where a `let` or `const` variable is **declared and initialized**.

Even though the variable is **hoisted**, it **cannot be accessed** until its declaration line.

> ⚠️ Trying to access the variable during the TDZ results in a **ReferenceError**.

---

### 🧠 TDZ in Action

```js
console.log(x); // ❌ ReferenceError: Cannot access 'x' before initialization
let x = 5;
```

#### 🔍 Explanation:
- x is hoisted but not initialized → it's in the TDZ
- When you try to access it before the line let x = 5;, it throws a ReferenceError
- The TDZ ends at the line where the variable is declared


#### ✅ Correct Usage Outside TDZ
```js
let y = 10;
console.log(y); // ✅ Output: 10
```
Since y is declared before it's accessed, it’s out of the TDZ — so no error occurs.

## 🔄 Comparing var vs let in TDZ
```js
console.log(a); // ✅ Output: undefined (hoisted and initialized)
var a = 20;

console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 30;
```
## 📊 Summary Table

| Declaration    | Hoisted? | Initialized at Hoist?    | Accessible Before Declaration?       |
|----------------|----------|---------------------------|--------------------------------------|
| `var`          | ✅ Yes   | ✅ Yes (`undefined`)       | ✅ Yes (as `undefined`)              |
| `let` / `const`| ✅ Yes   | ❌ No (in TDZ)             | ❌ No (`ReferenceError`)             |

## 💡 Key Takeaways
- TDZ starts at the beginning of the block
- TDZ ends at the variable's declaration line
- Accessing let or const variables before declaration causes a ReferenceError
- TDZ helps catch bugs and encourages clean coding practices

