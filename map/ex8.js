const users = [
  { name: "Tom", age: 17 },
  { name: "Sara", age: 22 }
];

// Task
// Create a new array where each object has an additional property:
// isAdult: true/false

const newarr = users.map((m)=>{
    return {
        name: m.name,
        age: m.age,
        isAdult : m.age > 18 ? true : false,
    }
});

console.log(newarr);