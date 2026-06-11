const products = [
  { id: 1, name: "Keyboard", price: 50 },
  { id: 2, name: "Mouse", price: 25 }
];

// Task
// Convert the array into an object where the keys are the product IDs.
// Expected Output
// {
//   1: { id: 1, name: "Keyboard", price: 50 },
//   2: { id: 2, name: "Mouse", price: 25 }
// }

const obj = products.reduce((acc,product)=>{
    
    if(!acc[product.id]){
        acc[product.id] = product
    }

    return acc;

},{});
console.log( obj);