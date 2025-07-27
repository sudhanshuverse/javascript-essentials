function sayHi() {
    const a = 10;
    const b = 20;
    add(5, 7);
}

function add(x, y) {
    kuchBhi();
    return x + y;
}

function kuchBhi() {
    console.log("Kuch Bhi");
}

function runNormalStack() {
    console.clear();
    console.log("Running normal call stack...");
    sayHi();
}

function introduceMe() {
    console.log("Introduce Me.");
    introduceMe(); // Infinite recursion
}

function runInfiniteStack() {
    console.clear();
    console.log("⚠️ Warning: This will crash due to stack overflow!");
    setTimeout(() => {
        introduceMe(); // Slight delay to allow user to stop if needed
    }, 500);
}