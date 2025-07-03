function palindrome(str) {
    let arr = str.split("");
    let reverseArr = str.split("").reverse();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== reverseArr[i]) {
            console.log("Girilen kelime palindrom değildir.");
            return;
        }

    }
    console.log("Girilen kelime palindromdur.");

}

palindrome("kepek");
