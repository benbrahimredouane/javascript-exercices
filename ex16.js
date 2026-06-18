const users = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" }
];

// Task
// Create a new array of usernames using this format:
// firstname.lastname

// Expected Output
// ["john.doe", "jane.smith"]

let arr = [];

for(let i =0 ; i<users.length ; i++){
    let fullName = users[i].firstName + '.' + users[i].lastName;
    arr.push(fullName);
    // fullName='';
}
console.log(arr);