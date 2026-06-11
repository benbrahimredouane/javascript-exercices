const numbers = [1, 2, 3, 4, 5, 6];

const group = numbers.reduce((grouped, number) => {

  if (!grouped.even) {
    grouped.even = [];
  } 

  if (!grouped.odd) {
    grouped.odd = [];
  }
  
  if (number % 2 !== 0) {
    grouped.odd.push(number);
  }
   if (number % 2 == 0) {
    grouped.even.push(number);
  }

  return grouped;
}, {});
console.log(group);
// Task
// Create an object with two arrays:
// even
// odd
// Expected Output
// {
//   even: [2, 4, 6],
//   odd: [1, 3, 5]
// }
