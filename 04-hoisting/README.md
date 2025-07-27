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

3. Temporal Dead Zone (TDZ)
```js
console.log(x); 
```