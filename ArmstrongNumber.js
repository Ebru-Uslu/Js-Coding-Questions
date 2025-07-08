function armstrongNumber(number) {
    let sum = 0;

    const digits = number.toString().split("")

    for (let i = 0; i < digits.length; i++) {
        sum += Math.pow(Number(digits[i]), digits.length);
    }

    if (sum === number) {
        console.log(`${number} bir Armstrong sayısıdır.`);
    }
    else {
        console.log(`${number} bir Armstrong sayısı değildir.`);
    }
}

armstrongNumber(371);