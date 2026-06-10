const students = [
  { name: "Sara", email: "sara@test.com" },
  { name: "Leo", email: "leo@test.com" },
  { name: "Mia", email: "mia@test.com" }
];

const newstudents = students.map((m)=>{
    return ( m.email);  
});
console.log(newstudents);

// Task
// Create a new array containing only the email addresses.
// Expected Output
// [
//   "sara@test.com",
//   "leo@test.com",
//   "mia@test.com"
// ]
