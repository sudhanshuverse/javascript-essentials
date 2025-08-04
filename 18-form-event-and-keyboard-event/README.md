# JavaScript Events Guide

This guide provides a comprehensive overview of JavaScript event types. Events are actions that occur in the browser, typically triggered by users (clicks, typing, form submission, etc.). This project explains and demonstrates how to handle these events using `addEventListener`.

---

## 1. ✅ Click Events

### 🧠 Definition
A **click event** occurs when a user clicks on an HTML element using a pointing device such as a mouse or touchpad. This includes single-clicks (`click`) and double-clicks (`dblclick`).

---

### 💡 Important Points
- Can be attached to any DOM element (`button`, `div`, `img`, etc.).
- `click` is triggered by a single click; `dblclick` requires two quick consecutive clicks.
- The event object contains useful properties like:
  - `event.target`: The element that was clicked.
  - `event.clientX`/`clientY`: Mouse position.
- You can use `preventDefault()` to stop default actions (e.g., following a link).

---

### 💻 Example
```javascript
const button = document.querySelector('button');

button.addEventListener('click', (e) => {
    console.log('Button clicked!');
    console.log('Clicked element:', e.target);
});

button.addEventListener('dblclick', (e) => {
    console.log('Button double-clicked!');
});
```

### 🔁 Event Types
Event Type	Description
click	Triggered on a single click.
dblclick	Triggered on a double click.



## 2. ✍️ Input Events
### 🧠 Definition
Input events are triggered when the value of an input field, textarea, or select element changes. It's commonly used to track real-time typing or user selections.

### 💡 Important Points
- input fires immediately as the user types or changes the input value.
- change only fires when the user commits the change (e.g., leaves the field or presses Enter).


### 💻 Example
```js
const input = document.querySelector('#username');
const output = document.querySelector('p');

input.addEventListener('input', (e) => {
    output.textContent = e.target.value;
});

input.addEventListener('change', (e) => {
    console.log('Value committed:', e.target.value);
});
```

## 🔁 Event Types
Event Type	Description
input	Fires instantly as input is typed or changed
change	Fires when input is finalized (blur or Enter)

## 🔄 Difference: `input` vs `change`

| Feature           | `input`                          | `change`                           |
|-------------------|----------------------------------|-------------------------------------|
| Triggered when    | Value changes during typing      | Value is committed (e.g., blur)     |
| Use case          | Real-time updates or suggestions | Final validation or form processing |
| Fires on blur     | ❌ No                            | ✅ Yes                              |


## 3. 👁️ Focus Events
### 🧠 Definition
Focus events are triggered when an element (typically a form input) gains or loses focus. This is useful for handling UI behavior like highlighting or validating form fields.

### 💡 Important Points
- focus: Triggers when the element becomes active (clicked or tabbed into).
- blur: Triggers when the element loses focus.
- Focus events do not bubble, so you can't use event delegation with them.
-  Often used for:
    - Styling active fields
    - Showing hints or tooltips
    - Removing error messages

### 💻 Example
```js
const input = document.querySelector('#username');

input.addEventListener('focus', (e) => {
    e.target.style.backgroundColor = 'lightyellow';
    console.log('Input focused');
});

input.addEventListener('blur', (e) => {
    e.target.style.backgroundColor = '';
    console.log('Input blurred');
});
```

### 🔁 Event Types
Event Type	Description
focus	Fires when element gains focus
blur	Fires when element loses focus



## 4. 📋 Form Events
### 🧠 Definition
Form events are triggered during interactions with a form element. The most common is submit, used to handle form data before it is sent to a server.

### 💡 Important Points
submit is triggered when a form is submitted via a button or Enter key.

Use event.preventDefault() to stop actual form submission (useful in SPAs).

You can access form data using the FormData object.

### 💻 Example
```js
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent reloading
    const formData = new FormData(form);
    for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
});
```

## 4. 📋 Form Events

### 🔁 Event Types

| Event Type | Description                    |
|------------|--------------------------------|
| `submit`   | Triggered on form submission   |

---

## 🔄 Difference: `submit` with vs without `preventDefault()`

| Feature              | With `preventDefault()`       | Without `preventDefault()`   |
|----------------------|-------------------------------|-------------------------------|
| Page reloads         | ❌ No                         | ✅ Yes                        |
| JavaScript control   | ✅ Full control               | ❌ Limited control            |
| Use case             | SPA, AJAX forms              | Traditional forms             |

---

## 5. ⌨️ Keyboard Events

### 🧠 Definition
Keyboard events are fired when the user interacts with a keyboard. You can capture key presses to create shortcuts, games, search triggers, or input validation.

---

### 💡 Important Points
- `keydown`: Fires when a key is first pressed (including control keys).
- `keyup`: Fires when the key is released.
- `keypress`: **Deprecated** – only fires for character-producing keys.
- The event object provides:
  - `event.key`: Character of the key (e.g., `"a"`, `"Enter"`)
  - `event.code`: Physical key code (e.g., `"KeyA"`, `"Enter"`)

---

### 💻 Example

```javascript
window.addEventListener('keydown', (e) => {
    console.log('Key:', e.key, '| Code:', e.code);
    if (e.key === 'Enter') {
        console.log('Enter key was pressed!');
    }
});

window.addEventListener('keyup', (e) => {
    console.log('Key released:', e.key);
});
```

## 🔁 Event Types

| Event Type | Description                        |
|------------|------------------------------------|
| `keydown`  | Fires when any key is pressed      |
| `keyup`    | Fires when the key is released     |
| `keypress` | **Deprecated** – character keys only (avoid) |

---

## 🔄 Difference: `keydown` vs `keyup` vs `keypress`

| Feature              | `keydown`         | `keyup`          | `keypress` (Deprecated) |
|----------------------|-------------------|------------------|-------------------------|
| **Trigger moment**   | Key is pressed    | Key is released  | When a character is input |
| **Includes control keys** | ✅ Yes       | ✅ Yes          | ❌ No                    |
| **Modern usage**     | ✅ Recommended    | ✅ Recommended   | ❌ Avoid                 |
