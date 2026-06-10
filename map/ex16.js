const users = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" }
];

// Task
// Create a new array of usernames using this format:
// firstname.lastname

// Expected Output
// ["john.doe", "jane.smith"]

const newusers = users.map((m)=>{
    return (
        m.firstName +'.'+ m.lastName
    );
});

console.log(newusers);
