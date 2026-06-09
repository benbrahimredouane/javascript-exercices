const students = [
  { name: "Eva", score: 85 },
  { name: "Leo", score: 92 },
  { name: "Mia", score: 78 }
];
// Task
// Return the object with the highest score.
// Expected Output
// { name: "Leo", score: 92 }

let hight = 0;
let hobj = {};

for(let i =0 ;i<students.length;i++){
    if(students[i].score > hight){
        hight = students[i].score;
        hobj = students[i];
    }

}
console.log(hight);
console.log(hobj);