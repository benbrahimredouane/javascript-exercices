const numbers = [1, 2, 3, 4, 5, 6];

// Task
// Create an object with two arrays:
// even
// odd
// Expected Output
// {
//   even: [2, 4, 6],
//   odd: [1, 3, 5]
// }

let obj = {};
let even = [];
let odd = [];

for(let i = 0 ;i<numbers.length;i++){
    if(numbers[i] % 2 == 0){
        even.push(numbers[i])
        obj.even = even;
    }
    else{
        odd.push(numbers[i]);
        obj.odd = odd;
    }
    
}
console.log(obj);
