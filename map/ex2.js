const users = [
  { firstName: "John", lastName: "Doe", age: 22 },
  { firstName: "Jane", lastName: "Smith", age: 30 },
];
const newusers = users.map((m) => {
    return{
        fullNmae : m.firstName + m.lastName,
        isAdult : m.age > 18 ? true : false,
    }
  
});
console.log(newusers);

// Task
// Create a new array of objects with this structure:
// {
//   fullName: "John Doe",
//   isAdult: true
// }

// Expected Output
// [
//   { fullName: "John Doe", isAdult: true },
//   { fullName: "Jane Smith", isAdult: true }
// ]
