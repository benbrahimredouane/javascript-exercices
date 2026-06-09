const roles = {
  admin: "John",
  editor: "Sara",
  user: "Mike",
};

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

let obj = {};

obj[roles.admin] = "admin";
obj[roles.editor] = "editor";
obj[roles.user] = "user";

console.log(obj);
