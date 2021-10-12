function getRandom() {
    console.log('Start');
    let array = [];
    let min = 10;
    let max = -10;
    let sum = 0;
    let mult = 1;
    for (let i = 0; i < 10; i++) {
        let current = Math.floor(Math.random() * 21) - 10;
        array.push(current);
        min = Math.min(current, min);
        max = Math.max(current, max);
        sum += current;
        mult *= current;
    }

    let avg = sum / 10;
    console.log("Array is " + array);
    console.log("Min is " + min);
    console.log("Max is " + max);
    console.log("Sum is " + sum);
    console.log("Mult is " + mult);
    console.log("Avg is " + avg);
    return;
}

