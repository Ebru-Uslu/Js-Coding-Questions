function mostRepeatedCharacter(str) {
    const charCount = {};
    let maxCount = 0;
    let maxChar = '';

    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        }
        else {
            charCount[char] = 1;
        }
    }
    for (let char in charCount) {
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }
    console.log(`En çok tekrar eden karakter:'${maxChar}'  frekansı:${maxCount}`);
}

mostRepeatedCharacter("hello world");


