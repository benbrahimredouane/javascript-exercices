// Create a new array containing only the names of active users.
// Expected Output
// ["Alice", "Charlie"]

const users = [
  { id: 1, name: "Alice", isActive: true },
  { id: 2, name: "Bob", isActive: false },
  { id: 3, name: "Charlie", isActive: true }
];

const active = [];

users.forEach(user => {

    if(user.isActive === true){
        active.push(user.name);
    }
    
});

console.log(active);

