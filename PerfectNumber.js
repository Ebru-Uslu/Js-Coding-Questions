function isPerfectNumber(num) {

    if (num < 1) {
        return false;
    }

    let sum = 0;

    for (let i = 1; i <= (num / 2); i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    if (sum === num) {
        console.log(`${num} mükemmel bir sayıdır.`);
    } else {
        console.log(`${num} mükemmel bir sayı değildir.`);
    }
}

isPerfectNumber(496);