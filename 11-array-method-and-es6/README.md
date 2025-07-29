# JavaScript: Array Methods and ES6 Features

This document explains commonly used **JavaScript Array methods** (`map`, `filter`, `reduce`, `some`, `every`), the `arguments` keyword, and essential **ES6 features** like default parameters and the spread operator.

## 1. `map()` Method

### 📖 Definition:
The `map()` method creates a **new array** by applying a function to each element of the original array.

### ✅ Syntax:
```js
const newArray = array.map(callback(element, index, array));
```
#### 🧪 Example:
```js
const months = ['January', 'February', 'March'];
const capitalized = months.map(month => month.toUpperCase());
console.log(capitalized); // ["JANUARY", "FEBRUARY", "MARCH"]
```
#### 💡 Points:
- Does not modify the original array.
- Always returns a new array.

## 2. filter() Method
### 📖 Definition:
The filter() method returns a new array containing elements that satisfy a given condition.

### ✅ Syntax:
```js
const filteredArray = array.filter(callback(element, index, array));
```
### 🧪 Example:
```js
const nums = [1, 2, 3, 4];
const even = nums.filter(n => n % 2 === 0);
console.log(even); // [2, 4]
```

#### 💡 Points:
- Filters values based on a true/false return.
- Returns a new filtered array.

## 3. reduce() Method
### 📖 Definition:
The reduce() method reduces the array to a single value by applying a function.

### ✅ Syntax:
```js
const result = array.reduce((accumulator, currentValue) => {}, initialValue);
```
### 🧪 Example:
```js
const nums = [1, 2, 3];
const sum = nums.reduce((acc, val) => acc + val, 0);
console.log(sum); // 6
```

#### 💡 Points:
- Great for sum, product, counting, etc.
- Requires an initialValue.

## 4. some() Method
### 📖 Definition:
Returns true if at least one element satisfies the condition.

### ✅ Syntax:
```js
const result = array.some(callback(element));
```

### 🧪 Example:
```js
const numbers = [10, 20, 30];
const hasAbove25 = numbers.some(n => n > 25);
console.log(hasAbove25); // true
```
#### 💡 Points:
Stops after finding the first match.

## 5. every() Method
### 📖 Definition:
Returns true if all elements satisfy the condition.

### ✅ Syntax:
```js
const result = array.every(callback(element));
```

### 🧪 Example:
```js
const numbers = [10, 20, 30];
const allAbove5 = numbers.every(n => n > 5);
console.log(allAbove5); // true
```

#### 💡 Points:
- Stops after finding the first failure.

## 6. arguments Keyword
### 📖 Definition:
arguments is an array-like object inside regular functions (not arrow functions), containing all passed parameters.

### 🧪 Example:
```js
function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(add(10, 20, 30)); // 60
```

#### 💡 Points:
- Only works in non-arrow functions.
- Useful when the number of arguments is unknown.

## 7. ES6 Features

### 7.1 Default Parameters

## 📖 Definition:
Allows setting default values for parameters in case no argument is passed.

### 🧪 Example:
```js
function greet(name = "Guest") {
  return "Hello " + name;
}
console.log(greet()); // "Hello Guest"
```

### 7.2 Spread Operator (...)
### 📖 Definition:
Used to spread/expand arrays or objects.

### 🧪 Example (Array):

```js
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4]
```

### 🧪 Example (Object):
```js
const obj1 = { x: 1 };
const obj2 = { y: 2 };
const result = { ...obj1, ...obj2 };
console.log(result); // { x: 1, y: 2 }
```


## 📚 Summary

| Feature          | Description                                 |
|------------------|---------------------------------------------|
| `map()`          | Transforms each item                        |
| `filter()`       | Filters items based on a condition          |
| `reduce()`       | Reduces to a single value                   |
| `some()`         | Checks if any item satisfies the condition  |
| `every()`        | Checks if all items satisfy the condition   |
| `arguments`      | Array-like object of passed arguments       |
| `Default Params` | Sets default values in functions            |
| `Spread (...)`   | Expands or merges arrays/objects            |
