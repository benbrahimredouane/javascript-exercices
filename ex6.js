const products = [
  { id: 1, name: "Keyboard", price: 50 },
  { id: 2, name: "Mouse", price: 25 }
];

// Convert the array into an object where the keys are the product IDs.

// {
//   1: { id: 1, name: "Keyboard", price: 50 },
//   2: { id: 2, name: "Mouse", price: 25 }
// }

let obj = {};

for(let i = 0 ; i<products.length;i++){
    obj[products[i].id] = products[i];
}

console.log(obj);

console.log(obj[1]);


