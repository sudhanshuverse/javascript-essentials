# 📌 JavaScript Event Listeners

## 🧠 Definition

An **Event Listener** in JavaScript is a method that allows you to execute a function when a specific event (like a mouse click, keypress, or page load) occurs on a selected HTML element.

It “listens” for the event and “responds” by running code when that event happens.

---

## ⚡ Why Event Listeners Are Important

- Helps create **interactive web pages**
- Separates **JavaScript from HTML structure** (clean code)
- Allows **multiple handlers** for the same event using `addEventListener()`
- Enables **dynamic element control** through event delegation

---

## 🔑 Types of Event Binding

| Type                     | Description                                        | Multiple Handlers?         | Recommended?   |
|--------------------------|----------------------------------------------------|-----------------------------|----------------|
| **Inline HTML Event**    | Uses HTML attribute like `onclick`                | ❌                          | ❌              |
| **DOM Property**         | JS like `element.onclick = function`              | ❌ (last one overwrites)   | 🚫              |
| **addEventListener()**   | Standard JS method                                 | ✅                          | ✅ ✅ ✅         |

---

## 🔧 Syntax

```js
element.addEventListener("event", function, useCapture);
Parameters:
event – A string like "click", "keydown", etc.
```

- function – Function to execute when the event occurs
- useCapture – Optional boolean for event phase (default is false, i.e., bubbling)

## 💡 Examples
### ✅ Example 1: DOM Property Method (Only One Handler)
```js
<button id="btn1">Click Me</button>
<script>
    document.getElementById("btn1").onclick = function () {
        alert("Button clicked using DOM property method!");
    };
</script>
```

### ✅ Example 2: Using addEventListener() (Multiple Handlers)
```js
<button id="btn2">Click Me</button>
<script>
    const btn2 = document.getElementById("btn2");

    btn2.addEventListener("click", function () {
        alert("First handler");
    });

    btn2.addEventListener("click", function () {
        console.log("Second handler");
    });
</script>
```

### ✅ Example 3: Event Delegation with Dynamically Added Elements
```js
<div class="container">
    <div class="card add-card">+</div>
</div>

<script>
    const container = document.querySelector(".container");

    container.addEventListener("click", function (e) {
        if (e.target.classList.contains("add-card")) {
            const newCard = document.createElement("div");
            newCard.classList.add("card");
            newCard.textContent = "New Card";
            container.appendChild(newCard);
        }
    });
</script>
```

## 🧭 Best Practices
- ✅ Prefer addEventListener() over other methods
- ❌ Avoid inline event attributes (onclick="...")
- ✅ Use event delegation for dynamic or multiple similar elements
- ✅ Keep your JS separated from HTML for maintainability