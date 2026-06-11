const roles = {
  admin: "John",
  editor: "Sara",
  user: "Mike"
};

const obj = Object.entries(roles).reduce((ob,[key,value])=>{

    ob[value] = key;
    
    return ob;

},{});
console.log(obj);

// Task
// Create a new object where:
// Keys become values
// Values become keys
// Expected Output
// {
//   John: "admin",
//   Sara: "editor",
//   Mike: "user"
// }

