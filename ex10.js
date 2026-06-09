const cart = [
  { product: "Laptop", price: 1000, quantity: 1 },
  { product: "Mouse", price: 25, quantity: 2 }
];

// Calculate the total price of all products.
// Expected Output
// 1050

let total = 0;

for(let i = 0 ;i<cart.length ;i++){

    total += cart[i].price;
}
console.log(total);
