const tags = ["html", "css", "javascript"];

// Task
// Create a new array where all tags are uppercase.
// Expected Output
// ["HTML", "CSS", "JAVASCRIPT"]

const newtags = tags.map((m)=>{
    return (m.toUpperCase());
});

console.log(newtags);