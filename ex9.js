const numbers = [1, 2, 2, 3, 4, 4, 5];

// Create a new array without duplicate values.
// Expected Output
// [1, 2, 3, 4, 5]

let newarr = [];


for (let i = 0; i < numbers.length; i++) {
  if (!newarr.includes(numbers[i])) {
    newarr.push(numbers[i]);
  }
}

console.log(newarr);
