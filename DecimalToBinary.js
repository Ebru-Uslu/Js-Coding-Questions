function convert(number) {
    if (number === 0) {
        return 0;
    }

    let binary = '';
    var quotient = number;

    while (quotient > 0) {
        binary = (quotient % 2).toString() + binary; // sayının 2 ile modunu al ve başa ekle
        quotient = Math.floor(quotient / 2);
    }

    console.log(number + " sayısının binary karşılığı: " + binary);

}

convert(17);




