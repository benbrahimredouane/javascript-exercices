const people = [
  { name: "Tom", age: 15 },
  { name: "Sara", age: 22 },
  { name: "Mike", age: 17 },
  { name: "Lina", age: 30 },
  { name: "Lina", age: 30 }
];
const grouped = people.reduce((groupe,person)=>{

  if(person.age > 18){
    groupe.adults++
  }
  else{
    groupe.minors++
  }

  return groupe;

},{
  adults : 0,
  minors:0
});
console.log(grouped)

// Task
// Create an object containing:
// Number of adults
// Number of minors
// Expected Output
// {
//   adults: 2,
//   minors: 2
// }