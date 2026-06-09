const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

const scores = [
  { id: 1, score: 90 },
  { id: 2, score: 75 },
];
// Task
// Merge both arrays using the id.
// Expected Output
// [
//   { id: 1, name: "John", score: 90 },
//   { id: 2, name: "Jane", score: 75 }
// ]

let merged = [];

for (let i = 0; i < users.length; i++) {
  for (let j = 0; j < scores.length; j++) {
    if(users[i].id == scores[j].id){
        let obj = {id:users[i].id,name:users[i].name,score:scores[j].score};
        merged.push(obj);
        obj = {};
    }
  }
}

console.log(merged);
