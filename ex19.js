const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 }
];

// Task
// Create a new array of strings using this format:
// Laptop - $1200

// Expected Output
// [
//   "Laptop - $1200",
//   "Mouse - $25"
// ]
 let array = [];

 for(let i =0  ; i<products.length;i++){
    let str = products[i].name + ' - '  + '$' + products[i].price;
    array.push(str);
 }

 console.log(array);
