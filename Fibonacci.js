function fibonacci(number) {
    let arr = [];

    if (number === 1) [
        arr.push(0)
    ]
    else if (number === 2) {
        arr.push(0, 1);
    }
    else {
        arr.push(0, 1);
        for (let i = 2; i < number; i++) {
            let u = arr[i - 2] + arr[i - 1]
            arr.push(u);
        }
    }
    console.log(arr);

}

fibonacci(10);