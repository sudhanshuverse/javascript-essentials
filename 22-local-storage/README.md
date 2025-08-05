# 🔐 Understanding Local Storage in Web Development

This project demonstrates how to use **Local Storage** in JavaScript to persist data across browser sessions. It includes different methods of storing, retrieving, and updating data, along with an interactive demo and comparisons between Local Storage, Session Storage, and Cookies.

---

## 📌 What is Local Storage?

Local Storage is a part of the Web Storage API that allows websites to store key-value data in the browser. Unlike cookies, it does not get sent with every HTTP request and can store larger data (up to 5–10 MB).

### Key Features:
- Part of HTML5 Web Storage API.
- Stores data as key-value pairs.
- Data persists even after browser is closed.
- Not sent to the server.
- Only accessible on the client side (JavaScript).

---

## 🗃️ Types of Web Storage

| Type            | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| **Local Storage**  | Persistent storage until explicitly cleared.                             |
| **Session Storage**| Temporary storage, cleared when the tab/window is closed.                |

---

## 🛠️ Local Storage API Methods

| Method                    | Description                                         |
|---------------------------|-----------------------------------------------------|
| `setItem(key, value)`     | Stores a key-value pair                            |
| `getItem(key)`            | Retrieves a value by key                           |
| `removeItem(key)`         | Deletes a key-value pair                           |
| `clear()`                 | Clears all key-value pairs                         |
| `key(index)`              | Gets the key at a given index                      |
| `length`                 | Returns the total number of stored items           |

> ℹ️ **Note**: Local Storage stores only strings. Use `JSON.stringify()` and `JSON.parse()` for objects and arrays.

---

## 💡 Code Examples

### 1. Basic Access (Not Recommended)

```javascript
const nameElement = document.querySelector('.name-tag');
nameElement.innerText = localStorage.MyName;
```

## 2. Using setItem and Event Listener
```js
nameInput.addEventListener('input', (e) => {
  localStorage.setItem('MyName', e.target.value);
  nameElement.innerText = localStorage.getItem('MyName');
});
```

### 3. Multiple Inputs (name + age)
```js
nameInput.addEventListener('input', (e) => {
  localStorage.setItem('myName', e.target.value);
});
ageInput.addEventListener('input', (e) => {
  localStorage.setItem('myAge', e.target.value);
});
```

### 4. Storing Data as Object (Recommended)
```js
const userData = JSON.parse(localStorage.getItem('userData')) || {};

nameInput.addEventListener('input', (e) => {
  userData.name = e.target.value;
  localStorage.setItem('userData', JSON.stringify(userData));
});
```

## ✅ Advantages of Local Storage

- **Persistent storage across sessions**
- **Easy to use API**
- **Larger capacity than cookies**
- **Doesn’t affect server performance**

---

## ⚠️ Limitations of Local Storage

- Only stores **strings**
- Not suitable for **sensitive data** (no encryption)
- Scoped to **domain** (same-origin policy)
- **Not shared** across browsers or devices

---

## 🔍 Comparison: Local Storage vs Session Storage vs Cookies

| Feature         | Local Storage     | Session Storage   | Cookies           |
|-----------------|-------------------|-------------------|-------------------|
| **Storage Limit** | 5–10 MB           | 5–10 MB           | ~4 KB             |
| **Lifetime**      | Until cleared     | Until tab is closed | Set by expiry     |
| **Scope**         | All tabs (same origin) | Single tab only   | Server & client   |
| **HTTP Sent?**    | ❌ No              | ❌ No              | ✅ Yes            |
| **Best Use**      | Theme, settings   | Temporary form data | Auth, tracking   |
| **Access via**    | `localStorage`    | `sessionStorage`   | `document.cookie` |
---

## 🧹 Clear Local Storage

To clear all stored data manually via JavaScript:

```javascript
localStorage.clear();
```