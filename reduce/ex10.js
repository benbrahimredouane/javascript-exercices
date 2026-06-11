const cart = [
  { product: "Laptop", price: 1000, quantity: 1 },
  { product: "Mouse", price: 25, quantity: 2 }
];

// Task
// Calculate the total price of all products.
// Expected Output
// 1050

const total = cart.reduce((result,current)=>{
    return result+=current.price;

},0);

console.log(total);