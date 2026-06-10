const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 }
];
const newproducts  = products.map((m)=>{
    return (
        m.name + ' - '  + '$' + m.price
    )
})
console.log(newproducts);

// Task
// Create a new array of strings using this format:
// Laptop - $1200

// Expected Output
// [
//   "Laptop - $1200",
//   "Mouse - $25"
// ]