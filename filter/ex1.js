const users = [
  { id: 1, name: "Alice", isActive: true },
  { id: 2, name: "Bob", isActive: false },
  { id: 3, name: "Charlie", isActive: true }
];

// Task
// Create a new array containing only the names of active users.
// Expected Output
// ["Alice", "Charlie"]

const arr = users.filter((m)=>{
    return(
     m.isActive == true
    )
})
const names = arr.map((m)=>{
    return m.name
})
console.log(names)