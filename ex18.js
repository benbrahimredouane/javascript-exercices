const arrays = [[1, 2], [3, 4], [5, 6]];

// Task
// Create a single array containing all values.
// Expected Output
// [1, 2, 3, 4, 5, 6]

let arr = [];

for(let i =0 ;i<arrays.length ;i++){
    for(let j =0 ; j<arrays[i].length ; j++){
        arr.push((arrays[i])[j]);
    }
}
console.log(arr);
