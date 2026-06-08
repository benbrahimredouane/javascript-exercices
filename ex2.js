// Create a new array of objects with this structure:
// {
//   fullName: "John Doe",
//   isAdult: true
// }

// Expected Output
// [
//   { fullName: "John Doe", isAdult: true },
//   { fullName: "Jane Smith", isAdult: true }
// ]


const users = [
  { firstName: "John", lastName: "Doe", age: 22 },
  { firstName: "Jane", lastName: "Smith", age: 30 }
];


const newarr = [];

let obj = {};

users.forEach(user => {

    if(user.age > 18){
        obj.fullName = `${user.firstName} ${user.lastName}`;
        obj.isaDULT = true;
    }
    newarr.push(obj);

    obj = {};
});

console.log(newarr);