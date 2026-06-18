const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

const scores = [
  { id: 1, score: 90 },
  { id: 2, score: 75 },
];

const merg1 = users.reduce((t, c) => {
  for (let i = 0; i < scores.length; i++) {
    if (c.id == scores[i].id) {
      t.score = scores[i].score;
    }
  }

  return t;
}, {});

console.log(merg1);

// Task
// Merge both arrays using the id.
// Expected Output
// [
//   { id: 1, name: "John", score: 90 },
//   { id: 2, name: "Jane", score: 75 }
// ]
