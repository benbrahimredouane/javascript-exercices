// dwzt akhay
// rj3at lua ratt f js hhhhh
const teams = [
  { id: 1, name: "Frontend" },
  { id: 2, name: "Backend" },
  { id: 3, name: "Design" },
];

const members = [
  { id: 1, name: "Ali", teamId: 1 },
  { id: 2, name: "Sara", teamId: 1 },
  { id: 3, name: "Omar", teamId: 2 },
  { id: 4, name: "Imane", teamId: 3 },
  { id: 5, name: "Yassine", teamId: 4 },
];

let arr = [];

for (let i = 0; i < teams.length; i++) {
  let obj = {};
  let mem = [];
  for (let j = 0; j < members.length; j++) {
    if (teams[i].id == members[j].teamId) {
      mem.push({
        id:members[j].id,
        name:members[j].name
    });
      obj = {
        team: teams[i].name,
        members: mem,
        count: mem.length,
      };
    }
  }
  arr.push(obj);
  obj = {};
}
console.log(JSON.stringify(arr , null ,2));

// Retourner une structure complète :

// [
//   {
//     team: "Frontend",
//     members: [
//       { id: 1, name: "Ali" },
//       { id: 2, name: "Sara" }
//     ],
//     count: 2
//   },
//   ...
// ]

