const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 20 },
  { name: "Keyboard", price: 80 }
];

// Create a new array containing only products with a price greater than 50.

// [
//   { name: "Laptop", price: 1200 },
//   { name: "Keyboard", price: 80 }
// ]

let arr = [];

for(let i =0;i<products.length;i++){
    if(products[i].price > 50){
        arr.push(products[i])

    }
}

console.log(arr);

