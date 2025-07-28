const user = {
    name: "Sudhanshu",
    lastName: "Kumar",
    age: 21
};

// Using Object.seal()
// - Prevents adding or deleting properties
// - You CAN still modify existing values
// Object.seal(user);
// user.age = 22;         // ✅ Allowed
// user.city = "Delhi";   // ❌ Not allowed (won't be added)
// delete user.name;      // ❌ Not allowed



// Using Object.freeze()
// - Prevents adding, deleting, OR modifying properties
Object.freeze(user);
user.age = 25;           // ❌ Not allowed
user.city = "Delhi";     // ❌ Not allowed
delete user.name;        // ❌ Not allowed

console.log("User object after freeze:", user);



