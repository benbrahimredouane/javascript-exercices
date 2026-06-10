const products = [
  { name: "Laptop", category: "Electronics" },
  { name: "Phone", category: "Electronics" },
  { name: "Table", category: "Furniture" }
];

const obj = products.reduce((acc,cur)=>{

   if(!acc[cur.category]){

    acc[cur.category] = [];
   
   }
    acc[cur.category].push(cur.name);

    return acc;
},{});

console.log(obj);

// Task
// Create an object where each category contains an array of product names.
// Expected Output
// {
//   Electronics: ["Laptop", "Phone"],
//   Furniture: ["Table"]
// }
