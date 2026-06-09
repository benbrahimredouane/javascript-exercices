const students = [
  { name: "Sara", email: "sara@test.com" },
  { name: "Leo", email: "leo@test.com" },
  { name: "Mia", email: "mia@test.com" },
];

// Task
// Create an object where:
// The keys are fruit names
// The values are the number of occurrences
// Expected Output
// {
//   apple: 2,
//   banana: 2,
//   orange: 1
// }


let arr = [];

for (let i = 0; i < students.length; i++) {
    console.log(students[i].email);
    arr.push(students[i].email);
}

console.log(arr);
