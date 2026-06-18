const students = [
  { name: "ali", score: 78 },
  { name: "sara", score: 92 },
  { name: "yassine", score: 45 },
  { name: "imane", score: 66 },
  { name: "karim", score: 50 },
];

const obj = students.reduce((t,cur)=>{
    if(cur.score >=50){
        t.pass++;
    }
    if(cur.score<50){
        t.fail++

    }
    if(cur.score>90){
        t.excellent++
    }
    return t
},{
    pass:0,
    fail:0,
    excellent:0
});

console.log(obj);
