const fruits = ["apple", "banana", "apple", "orange", "banana"];

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
