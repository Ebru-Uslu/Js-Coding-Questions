function reverseInteger(number) {

    let arr = []

    while (number > 0) {
        arr.push(number % 10)
        number = parseInt(number / 10);
    }

    let reversedNumber = parseInt(arr.join(''));
    console.log(reversedNumber);
}


reverseInteger(650);
