const users = [
  { name: "Tom", age: 17 },
  { name: "Sara", age: 22 }
];

// isAdult: true/false

// [
//   { name: "Tom", age: 17, isAdult: false },
//   { name: "Sara", age: 22, isAdult: true }
// ]

for(let i =0;i<users.length;i++){
    if(users[i].age>18){
        users[i].isAdult = true;
    }
    else{
        users[i].isAdult = false;
    }
}
console.log(users);
