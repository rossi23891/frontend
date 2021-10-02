function sumInput() {
    let arr = [];
    let sum = 0;
    while (true) {
        let num = prompt("введите число: ");
        if (num == '' || num == undefined || isNaN(num)) {
            break;
        }
        arr.push(num);
        sum += +num;
    }
    arr.sort((a, b) => a - b)
    alert('Массив такой : ' + arr);
    alert('Сумма элементов массива: ' + sum);
}