# Understanding APIs in JavaScript: A Deep Dive

This project is an interactive web page that provides a comprehensive introduction to APIs in JavaScript, JSON, and HTTP methods. It includes live examples demonstrating how to fetch data from public APIs and handle responses asynchronously.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Credits](#credits)

---

## Overview

APIs (Application Programming Interfaces) allow different software applications to communicate with each other. In web development, APIs enable dynamic content loading without reloading the page. This project demonstrates:

- What APIs are and why they matter.
- Types of APIs (REST, GraphQL, SOAP, WebSocket).
- JSON as the standard data format for APIs.
- Fetching data using JavaScript's Fetch API.
- HTTP methods like GET, POST, and DELETE.

---

## Features

- Interactive example fetching random dog images from the Dog CEO API.
- Demonstrations of JSON parsing and stringifying.
- Code examples for using Fetch API with HTTP methods.
- Styled and structured sections for easy readability.

---

## Technologies Used

- **HTML5**: Structure and content of the page.
- **CSS3**: Styling and layout of the page.
- **JavaScript (ES6)**: Fetch API, DOM manipulation, and asynchronous programming.
- **Public APIs**: Dog CEO API and JSONPlaceholder API.

---

## Project Structure
```js
project-root/
│
├── index.html # Main HTML page
├── style.css # Styles for the page
├── script.js # JavaScript for interactivity
└── README.md # This file
```
---

## Installation

1. Clone the repository:
```js
git clone https://github.com/sudhanshuverse/javascript-essentials/23-api.git
```


## Usage
Fetching Random Dog Images
Click the "Get New Image" button to fetch a random dog image from the Dog CEO API. The image will automatically update in the container.

## Working with JSON
Parsing JSON: Convert JSON strings to JavaScript objects using:

```js
const obj = JSON.parse(jsonString);
Stringifying JSON: Convert JavaScript objects to JSON strings using:
```

```js
const jsonString = JSON.stringify(obj);
```

## HTTP Methods
- GET: Retrieve resources from APIs.
- POST: Create new resources on the server.
- DELETE: Remove resources from the server.

Examples
### Fetch API Example
```js
fetch('https://api.example.com/endpoint')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### JSON Example
```js
const user = { name: 'Alice', age: 25 };
const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Alice","age":25}'
const parsed = JSON.parse(jsonString);
console.log(parsed.name); // 'Alice'
```

### Dog Image Fetch Example
```js
const dogImage = document.getElementById('dogImage');
const newDogBtn = document.getElementById('newDogBtn');

newDogBtn.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => {
            dogImage.setAttribute('src', json.message);
            console.log('Fetched Dog Image:', json);
        });
});
```

## Credits
Dog CEO API: https://dog.ceo/dog-api/

JSONPlaceholder API: https://jsonplaceholder.typicode.com/

