const person = [
  {
    name: "amine",
    age: 23,
    salary: 10000,
    ville: "meknes",
    Active: true,
  },
  {
    name: "mustapha",
    age: 23,
    salary: 10057,
    ville: "fes",
    Active: true,
  },
  {
    name: "hamza",
    age: 23,
    salary: 10000,
    ville: "fes",
    Active: true,
  },
  {
    name: "mehdi",
    age: 23,
    salary: 10000,
    ville: "fes",
    Active: false,
  },
];

const obj = person.reduce((t,cur)=>{

    if(cur.Active === true){
        t.active.push(cur);
    }else{
        t.inactive.push(cur);
    }
    return t;
}

,{active:[],inactive:[]})

console.log(obj)
// hada howa libghina
// {
//   active: [...],
//   inactive: [...]
// }