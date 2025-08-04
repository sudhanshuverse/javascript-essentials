# 📘 JavaScript DOM Manipulation: `document.createElement()` and `Element.remove()`

This project demonstrates how to **create** and **remove** DOM elements dynamically using JavaScript. Specifically, it covers:

- `document.createElement()` for creating new HTML elements
- `Element.remove()` for deleting elements from the DOM

---

## 📌 1. `document.createElement()`

### 🔹 Definition
`document.createElement(tagName)` is a JavaScript method that **creates a new HTML element node** of the specified tag. The created element exists only in memory until it is explicitly appended to the DOM.

---

### 🔹 Important Points
- Creates elements like `<div>`, `<img>`, `<p>`, etc., dynamically.
- Returns a reference to a newly created DOM node.
- Elements can be customized with:
  - `.setAttribute()`
  - `.classList.add()`
  - `.innerText` / `.innerHTML`
- You must append the element to the DOM (e.g., using `.append()` or `.appendChild()`) to make it visible.
- Ideal for dynamic content generation based on events or user input.

---

### 🔹 Syntax
```js
const element = document.createElement(tagName);
tagName: A string like 'div', 'p', 'img', etc.

```
- Returns: An unconnected DOM element.

### 🔹 Basic Example
```js
const div = document.createElement('div');
div.classList.add('my-class');
div.innerText = 'Hello, World!';
document.body.append(div);
```

## 🗑️ 2. Element.remove()
### 🔹 Definition
Element.remove() removes the specified element from the DOM tree. This operation also removes all child elements inside it.

### 🔹 Important Points
- Removes the selected DOM element immediately.
- No need to reference the parent node.
- No return value.
- Not supported in very old browsers (before 2014). Use parentNode.removeChild() for compatibility.
- Best for deleting content created dynamically or in response to user actions.

### 🔹 Syntax
```js
element.remove();
```
- element: Any reference to an existing DOM element.
- No parameters or return values.

### 🔹 Example
```js
const div = document.querySelector('.my-div');
div.remove();
```

