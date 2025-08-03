# JavaScript DOM Concepts

A guide covering the most commonly used JavaScript DOM manipulation methods, with definitions, examples, key points, and differences.

---

## 1. Element Selection

### ✅ Definition:
Used to select HTML elements so you can read, modify, or interact with them.

### 🔍 Example:
```js
document.getElementById("id");
document.getElementsByClassName("class");
document.querySelector("selector");
document.querySelectorAll("selector");
```

### 📌 Important Points:
- getElementById returns a single element.
- getElementsByClassName and getElementsByTagName return live collections.
- querySelector returns the first match.
- querySelectorAll returns a static NodeList.


## 2. innerText, textContent, innerHTML
✅ Definitions:
- innerText: Gets only visible (rendered) text.
- textContent: Gets all text, including hidden elements.
- innerHTML: Gets or sets the full HTML inside an element (tags, comments, etc).

### 🔍 Example:
```js
const el = document.getElementById("example");

el.innerText;     // "Visible text only"
el.textContent;   // "Visible text and hidden text"
el.innerHTML;     // "<p><b>Visible</b> and <span hidden>Hidden</span></p>"
```

### 📌 Important Points:
- innerText is layout-aware and triggers reflow (slower).
- textContent is faster but includes hidden content.
- innerHTML can be used to dynamically insert formatted HTML.
- Use caution when inserting user data with innerHTML (XSS risk).

## 🔁 Difference Table: innerText vs textContent vs innerHTML

| Feature                 | `innerText` | `textContent` | `innerHTML`                 |
|-------------------------|-------------|---------------|------------------------------|
| Visible only?           | ✅ Yes      | ✅ Yes        | ✅ (shows rendered HTML)     |
| Includes hidden text?   | ❌ No       | ✅ Yes        | ✅ Yes                       |
| Includes HTML tags?     | ❌ No       | ❌ No         | ✅ Yes                       |
| Modifies DOM?           | ✅ Yes      | ✅ Yes        | ✅ Yes                       |
| Use case                | UI display  | Raw data extraction | Injecting full HTML     |

---

## 3. `setAttribute()` and `getAttribute()`

### ✅ Definition:
Used to read or change an element’s HTML attributes.

### 🔍 Example:
```js
const link = document.getElementById("myLink");
link.setAttribute("href", "https://google.com");
const href = link.getAttribute("href"); // "https://google.com"
```


## 3. `setAttribute()` and `getAttribute()`

### ✅ Definition:
Used to read or change an element’s HTML attributes.

### 🔍 Example:
```js
const link = document.getElementById("myLink");
link.setAttribute("href", "https://google.com");
const href = link.getAttribute("href"); // "https://google.com"
```


### 📌 Important Points:
- You can use it on any valid attribute: href, src, alt, id, class, etc.
- Helpful for adding dynamic behavior and links.
- Works even for custom data-* attributes.

## 4. classList (Style/Classes)
✅ Definition:
A read-only property that allows you to modify classes on an element.

🔍 Example:
```js
const el = document.getElementById("para");
el.classList.add("highlight");
el.classList.remove("error");
el.classList.toggle("active");
```

### 📌 Important Points:
- classList.add() and .remove() manipulate CSS classes.
- toggle() is useful for switches, tabs, dropdowns, etc.
- You can also use .contains() to check if a class exists.

## 5. Parent and Sibling Access
✅ Definition:
Access related elements in the DOM tree using:

- parentElement
- nextElementSibling
- previousElementSibling

### 🔍 Example:
```js
const input = document.getElementById("email");
const label = input.previousElementSibling;
const form = input.parentElement;
```

### 📌 Important Points:
- Use previousElementSibling to get the label or heading just before an input.
- parentElement is useful for applying styles or validation to a wrapper section (like a form group).