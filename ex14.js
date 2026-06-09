const tags = ["html", "css", "javascript"];

// Task
// Create a new array where all tags are uppercase.
// Expected Output
// ["HTML", "CSS", "JAVASCRIPT"]

let arr = [];

for(let i =0 ; i<tags.length;i++){
    let value = tags[i].toUpperCase();
    arr.push(value);
    value = '';
}

console.log(arr);
