const students = [
  { name: "Sara", email: "sara@test.com" },
  { name: "Leo", email: "leo@test.com" },
  { name: "Mia", email: "mia@test.com" },
];

let arr = [];

for (let i = 0; i < students.length; i++) {
    console.log(students[i].email);
    arr.push(students[i].email);
}

console.log(arr);
