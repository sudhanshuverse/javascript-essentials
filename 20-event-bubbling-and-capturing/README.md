# 📚 JavaScript Event Propagation: Bubbling, Capturing, and `once` Option

## 🔰 What is Event Propagation?

**Event Propagation** refers to the process by which an event travels through the DOM (Document Object Model) tree when it is triggered on an element. It determines the order in which event listeners receive the event.

There are **three key parts** to event propagation:

1. **Event Capturing (Trickling)**
2. **Target Phase**
3. **Event Bubbling**

In addition, JavaScript provides a helpful event listener option called `once`, which ensures a handler is executed only once.

---

## 🔵 1. Event Bubbling

### 📖 Definition

**Event Bubbling** is the default behavior in JavaScript where an event starts at the target element and bubbles up to its ancestors (parent → grandparent → document).

### 🧠 How It Works

When you click on a deeply nested element, the event first triggers on the **target element**, then **bubbles up** the DOM tree, triggering any event listeners on ancestor elements (if present).

### 📌 Syntax

```js
element.addEventListener('click', callback, { capture: false });
element.addEventListener('click', callback);
```


### ✅ Example
```js
<div id="parent">
  <button id="child">Click Me</button>
</div>

<script>
  document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent Clicked");
  });

  document.getElementById("child").addEventListener("click", () => {
    console.log("Child Clicked");
  });
</script>
```
### 🖨️ Console Output (when child is clicked):
```js
Child Clicked
Parent Clicked
```

## 🔴 2. Event Capturing
### 📖 Definition
Event Capturing (also called trickling) is the phase where the event travels from the top of the DOM (window) down to the target element, before reaching it.

### 🧠 How It Works
The event travels down the DOM tree before reaching the target. Listeners set with { capture: true } will be triggered in this phase.

### 📌 Syntax
```js
element.addEventListener('click', callback, { capture: true });
```
### ✅ Example
```js
<div id="outer">
  <div id="inner">Click Me</div>
</div>

<script>
  document.getElementById("outer").addEventListener("click", () => {
    console.log("Outer Clicked (Capturing)");
  }, true);

  document.getElementById("inner").addEventListener("click", () => {
    console.log("Inner Clicked");
  });
</script>
```

### 🖨️ Console Output (when inner is clicked):
```js
Outer Clicked (Capturing)
Inner Clicked
```

## 🟡 3. The once Option
### 📖 Definition
The once option allows an event listener to be automatically removed after being triggered once, preventing it from firing multiple times.

### 📌 Syntax
```js
element.addEventListener('click', callback, { once: true });
```

### ✅ Example
```js
<button id="btn">Click Me Once</button>

<script>
  document.getElementById("btn").addEventListener("click", () => {
    console.log("This only runs once.");
  }, { once: true });
</script>
```

### 🖨️ Console Output (when clicked multiple times):

This only runs once.
Only appears on the first click.


## 🚦 Controlling Event Propagation
🔹 Stop Bubbling or Capturing
You can prevent an event from bubbling or trickling further using:

```js
event.stopPropagation();
```

### ✅ Example
```js
child.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Child clicked but won't bubble up.");
});
```

## 🧾 Comparison Table

| Feature       | Bubbling                        | Capturing                       | Once                          |
|---------------|----------------------------------|----------------------------------|-------------------------------|
| **Direction** | Target → Parent → Root          | Root → Parent → Target          | Executes once then removed   |
| **Default**   | ✅ Yes                           | ❌ No (must specify)             | ❌ No (must specify)          |
| **Syntax**    | `{ capture: false }` or omit    | `{ capture: true }`             | `{ once: true }`             |
| **Use Case**  | Most common event handling       | Early interception/logging      | Intro animations, special actions |
| **Stops with**| `event.stopPropagation()`        | `event.stopPropagation()`       | Auto-removal after 1 call    |

---

## 📌 Summary

- **Bubbling**: Default; event flows upward from target to root.  
- **Capturing**: Optional; flows downward from root to target.  
- **`once`**: Makes sure the handler runs only a single time.  
- Use `stopPropagation()` to halt event movement at any point.
