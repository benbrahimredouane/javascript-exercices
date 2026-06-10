const fruits = ["apple", "banana", "apple", "orange", "banana"];

const obj = fruits.reduce((acc,fr)=>{

    if(acc[fr]) acc[fr]++;
    else {
        acc[fr] = 1
    }

    return acc;
},{});
console.log(obj);
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