const people = [
  { name: "Tom", age: 15 },
  { name: "Sara", age: 22 },
  { name: "Mike", age: 17 },
  { name: "Lina", age: 30 },
];

// Task
// Create an object containing:
// Number of adults
// Number of minors
// Expected Output
// {
//   adults: 2,
//   minors: 2
// }
let obj = {};
let add = 0;
let min = 0;

for (let i = 0; i < people.length; i++) {
  if (people[i].age >= 18) {
    add++;
  } else {
    min++;
  }
}
obj['adults'] = add;
obj['minors'] = min;

console.log(obj);
