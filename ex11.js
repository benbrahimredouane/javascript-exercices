const users = [
  { name: "Sam", age: 30 },
  { name: "Alex", age: 20 },
  { name: "Mia", age: 25 },
];

// Task
// Sort the array from youngest to oldest.
// Expected Output
// [
//   { name: "Alex", age: 20 },
//   { name: "Mia", age: 25 },
//   { name: "Sam", age: 30 }
// ]

for(let i = 0 ; i <users.length -1 ;i++){

    let min = i;
    for(let j = i+1 ; j<users.length ; j++){
        if(users[min].age > users[j].age){
            min = j;
        }
    }

    let temp = users[i];
    users[i] = users[min];
    users[min] = temp;

}
console.log(users);

