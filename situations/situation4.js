const users = [
  { id: 1, name: "Alice", isActive: true, age: 30 },
  { id: 2, name: "Bob", isActive: false, age: 17 },
  { id: 3, name: "Charlie", isActive: true, age: 25 },
];

const scores = [
  { id: 1, score: 95 },
  { id: 2, score: 60 },
  { id: 3, score: 88 },
];

const cart = [
  { product: "Laptop", price: 1200, quantity: 1, category: "Electronics" },
  { product: "Mouse", price: 25, quantity: 2, category: "Electronics" },
  { product: "Table", price: 150, quantity: 1, category: "Furniture" },
];

let obj = {};
let Activeusernames = [];
let arr = [];

for (let i = 0; i < users.length; i++) {
  if ((users[i].age > 18) && users[i].isActive) {
    Activeusernames.push(users[i].name);
  }
  let ob = {};
  for (let j = 0; j < scores.length; j++) {
    if (users[i].id == scores[j].id) {
      ob = {
        id: users[i].id,
        name: users[i].name,
        score: scores[j].score,
        tier: scores[j].score > 90 ? "VIP" : "Standard",
      };
      arr.push(ob);
    }
  }
}
let cartMetrics = {};
let byCategory = {};
let total = 0;

for (let x = 0; x < cart.length; x++) {
  if (!byCategory[cart[x].category]) {
    byCategory[cart[x].category] = [];
  } 
    byCategory[cart[x].category].push(cart[x].product);
  
  total = total + cart[x].price * cart[x].quantity;
}
cartMetrics = {
  totalValue: total,
  byCategory: byCategory,
};

obj = {
  Activeusernames,
  arr,
  cartMetrics,
};
console.log(JSON.stringify(obj,null,2));
