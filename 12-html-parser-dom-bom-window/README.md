# 🌐 Window, BOM, DOM, Node, and HTML Parser - Explained with Examples

This project explains important concepts in web development: **Window**, **BOM (Browser Object Model)**, **DOM (Document Object Model)**, **HTML Parser**, and **Node**.

Each concept is presented with its **definition**, **key points**, **JavaScript example**, and a **comparison table**.

---
## 1. HTML Parser

**Definition:**  
The **HTML parser** processes the HTML code and constructs the **DOM Tree** that JavaScript can interact with. It converts HTML tags into objects and elements in memory.

### 🔍 Key Points:

- Parses HTML from top to bottom.
- Converts tags to nodes and forms the DOM.
- Works closely with the CSS and JS engine.
- Parsing can be blocked by `<script>` tags.

### ✅ Example:

```js
console.log(document.body.children[0].innerText); // Logs text of the first child of body
```
## 2. Document Object Model (DOM)
Definition:
The DOM is a tree-like structure of nodes that represents the content and structure of a web page. JavaScript can dynamically interact with and change it.

### 🔍 Key Points:
Each element is a node.

The DOM is live — changes reflect instantly.

Provides methods like getElementById(), querySelector().

###✅ Example:
```js
document.querySelector('h1').innerText = 'Welcome to DOM World!';
```

## 3. Node
Definition:
A Node is a single point in the DOM tree. Every HTML element, attribute, and piece of text is a node.

### 🔍 Types of Nodes:
Element Node - <div>, <p>, <img>, etc.

Text Node - Text inside elements.

Comment Node - <!-- Comments -->

✅ Example:
```js
const node = document.querySelector('h1');
console.log(node.nodeType); // 1 for Element node
```

## 4. Browser Object Model (BOM)
Definition:
The BOM allows JavaScript to interact with browser-specific features such as navigation, screen, and history.

### 🔍 Key Points:
Not standardized like DOM.

Gives access to navigator, screen, location, history.

Helps in controlling the browser window.

### ✅ Example:
```js
console.log('URL:', window.location.href);
console.log('Browser:', window.navigator.userAgent);
```

## 5. Window Object
Definition:
The Window object is the global object in the browser. It contains the DOM, BOM, and all global JavaScript variables/functions.

### 🔍 Key Points:
Top-most object in the browser.

Global methods like alert(), setTimeout() are its properties.

Provides access to both DOM and BOM.

✅ Example:
```js
window.alert('Hello from the Window object!');
console.log(window.innerWidth, window.innerHeight);
```

## 6. Comparison Table: Window vs BOM vs DOM vs HTML Parser

| **Aspect**     | **Window**                        | **BOM**                          | **DOM**                         | **HTML Parser**                |
|----------------|-----------------------------------|----------------------------------|----------------------------------|-------------------------------|
| **Definition** | Global object for browser tab     | Browser feature interface        | Page content interface           | Converts HTML to DOM Tree     |
| **Contains**   | BOM + DOM                         | `navigator`, `screen`, etc.     | `document`, elements             | Internal process              |
| **Use Case**   | Global browser control            | Browser-level tasks              | Modify web page content          | Build the DOM                 |
| **Examples**   | `alert()`, `setTimeout()`         | `window.location.href`           | `document.querySelector()`       | Parsing happens internally    |
