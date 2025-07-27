# 🔍 JavaScript Scope & Closures (Quick Guide)

## 📘 What is Scope?
Scope defines **where variables and functions are accessible**. JavaScript uses **lexical scoping**, meaning scope is based on **where code is written**, not where it's called.

---

## 🔠 Types of Scope

### 1. 🌍 Global Scope
- Declared outside any function or block.
- Accessible from anywhere in the code.

### 2. 🔁 Function (Local) Scope
- Declared inside a function.
- Only accessible within that function.

### 3. 📦 Block Scope
- Variables declared with `let` or `const` inside `{}`.
- Not accessible outside the block.

### 4. 🔗 Lexical Scope
- Functions can access variables from their outer scope.
- Scope is determined at definition, not execution.

### 5. 🔐 Closures
- Inner functions "remember" variables from outer functions.
- Useful for private state and data encapsulation.

### 6. 📦 Module Scope
- Each JavaScript module has its own private scope.
- Variables must be exported to be used elsewhere.

---

## ⚠️ Implicit Globals
- Declaring variables without `let`, `const`, or `var` makes them global.
- Leads to unpredictable bugs and is bad practice.

---

## 🔒 Use Strict Mode
- Enables stricter parsing and error handling.
- Prevents accidental creation of global variables.

---

## ✅ Key Points

- Prefer `let` and `const` over `var`.
- Avoid implicit global variables.
- Closures retain access to outer variables.
- JavaScript is **lexically scoped**.
- Modules help structure code and prevent global pollution.

---

## 📊 Scope Summary Table

```text
| Type         | Scope Level             | Notes                             |
|--------------|--------------------------|------------------------------------|
| Global       | Entire script/module     | Accessible anywhere                |
| Function     | Inside a function        | Isolated to the function           |
| Block        | Inside {}                | Only with let/const                |
| Lexical      | At declaration site      | Follows physical code structure    |
| Closure      | Preserved outer scope    | Remembers context after return     |
| Module       | File-level scope         | Scoped to the module               |
