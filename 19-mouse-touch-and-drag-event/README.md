# 🖱️ JavaScript Mouse, Scroll, Touch, and Drag Events

This tutorial demonstrates how to use **Mouse**, **Scroll**, **Touch**, and **Drag Events** in JavaScript with examples and explanations. The project includes interactive examples using a draggable green card.

--- 
## 1. 🖱️ Mouse Events

Mouse events are used when interacting with elements using a mouse device. They are common in desktop web applications.

### ✅ Types of Mouse Events:

| Event         | Description                                      |
|---------------|--------------------------------------------------|
| `click`       | When the mouse is clicked                        |
| `mousedown`   | When the mouse button is pressed                 |
| `mouseup`     | When the mouse button is released                |
| `mouseenter`  | When the cursor enters an element (no bubbling)  |
| `mouseleave`  | When the cursor leaves an element                |
| `mouseover`   | Like `mouseenter`, but includes child elements   |
| `mousemove`   | When the mouse is moved within the element       |
| `wheel`       | Triggered when the mouse wheel is scrolled       |

### 💡 Example:

```javascript
card.addEventListener('click', () => {
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.innerText = count++;
    container.appendChild(newCard);
});
```
## 2. 📜 Scroll Events
Scroll events are triggered when the user scrolls the page or a scrollable container.

### ✅ Important Notes:
- Can be attached to window or scrollable elements.
- Scroll events fire very frequently — throttle or debounce if needed for performance.

### 💡 Example:
```js
window.addEventListener('scroll', (e) => {
    console.log("Page is scrolling", e);
});
```

## 3. 🤏 Touch Events (Mobile/Touch Devices)
Touch events are primarily for mobile or touchscreen devices. They track finger gestures and interaction.

✅ **Types of Touch Events:**

| Event        | Description                        |
|--------------|------------------------------------|
| `touchstart` | Finger touches the screen          |
| `touchmove`  | Finger moves across the screen     |
| `touchend`   | Finger is lifted off the screen    |



### 💡 Example:
```js
card.addEventListener('touchstart', (e) => {
    console.log("Touch started", e);
});
```

## 4. 🎯 Drag Events
Drag events are used for building drag-and-drop functionality.
### ✅ Types of Drag Events:

| Event        | Description                           |
|--------------|---------------------------------------|
| `dragstart`  | Fires when the drag starts            |
| `drag`       | Continuously fires while dragging     |
| `dragend`    | Fires when the drag operation ends    |

> **Note:** The element must have `draggable="true"` set in the HTML.

---

### 💡 Example:

```javascript
card.addEventListener('dragstart', (e) => {
    console.log("Drag started", e);
});
card.addEventListener('drag', (e) => {
    console.log("Dragging...", e);
});
card.addEventListener('dragend', (e) => {
    console.log("Drag ended", e);
});
```