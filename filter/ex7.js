const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 20 },
  { name: "Keyboard", price: 80 }
];

const arr = products.filter((m)=>{
    return (m.price > 50)
})
console.log(arr);

// Task
// Create a new array containing only products with a price greater than 50.
// Expected Output
// [
//   { name: "Laptop", price: 1200 },
//   { name: "Keyboard", price: 80 }
// ]