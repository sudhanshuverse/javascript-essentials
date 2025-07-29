# 🔐 Object.seal() and Object.freeze()

This small project explains how to stop changes in JavaScript objects.

## 🧊 What They Do

- **Object.seal(object)**  
q
  ✅ You can change values  
  ❌ You can't add or delete properties

- **Object.freeze(object)**  
  ❌ You can't add, delete, or change anything

## 📁 Files

- `index.html` – Shows basic info on the page  
- `script.js` – Shows how `seal()` and `freeze()` work

## 💻 Example

```js
const user = { name: "Sudhanshu", age: 21 };

Object.seal(user);    // You can change age, but not add or delete anything
Object.freeze(user);  // You can't do anything to the object now
```
