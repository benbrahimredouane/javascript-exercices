const fruits = ["apple", "banana", "apple", "orange", "banana"];

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

let obj = {};
let count = 1;

for (let i = 0; i < fruits.length; i++) {
  
  for (let j = 0; j < fruits.length; j++) {
    if (fruits[i] === fruits[j]) {
      if (i === j) continue;
      count++;
    }
  }
  obj[fruits[i]] = count;
  count = 1;
}

console.log(obj);
