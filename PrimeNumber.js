function isPrime(number) {
    if (number <= 1) {
        console.log(`${number} asal bir sayı değildir.`);
        return;
    }

    for (let i = 2; i <= (number / 2); i++) {
        if (number % i === 0) {
            console.log(`${number} asal bir sayı değildir.`);
            return;
        }
    }
    console.log(`${number} asal bir sayıdır.`);
}

isPrime(56); 