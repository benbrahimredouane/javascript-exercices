var scoresA = [10, 12, 8, 15]; 
var scoresB = [];

// stats(scoresA) → { sum: 45, avg: 11.25, min: 8, max: 15 }

// stats(scoresB) → { sum: 0, avg: 0, min: 0, max: 0 }

let obj = {
    sum:0,
    avg:0,
    min:0,
    max:0,
};

function calc(arr){
    if(arr.length == 0){
        return obj;
    }
    let summ = 0;
     let mx = arr[0];
     let mn = arr[0];

    for(let i =0 ; i<arr.length ; i++){
        summ = summ + arr[i];
        if(mx < arr[i]){
            mx = arr[i];
        }
         if(mn > arr[i]){
            mn = arr[i];
        }
    }
    let average = summ / arr.length;
    obj.sum =summ;
    obj.avg = average;
    obj.max = mx;
    obj.min = mn;

    return obj;

}

console.log(calc(scoresB));