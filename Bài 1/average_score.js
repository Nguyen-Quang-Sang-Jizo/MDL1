let points = [1, 5, 7, 3, 9];

function findAvg(arr) {
    let count = 0;
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
        count++;
    }
    console.log(total / count);
}

findAvg(points);