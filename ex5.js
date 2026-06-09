const products = [
  { name: "Laptop", category: "Electronics" },
  { name: "Phone", category: "Electronics" },
  { name: "Table", category: "Furniture" },
];

// Task
// Create an object where each category contains an array of product names.
// Expected Output
// {
//   Electronics: ["Laptop", "Phone"],
//   Furniture: ["Table"]
// }

let obj = {};
let arr = [];

for (let i = 0; i < products.length; i++) {
  for (let j = 0; j < products.length; j++) {
    if(products[i].category === products[j].category){
        arr.push(products[i].name);  
    }
  }
  obj[products[i].category] = arr;
  arr = [];
}

console.log(obj);
