function divideArray(array, chunkSize) {
    let result = []

    for (let i = 0; i < array.length; i++) {
        result.push(array.slice(i, i + chunkSize))
        // result = [...result, array.slice(i, i + chunkSize)]
        i += chunkSize - 1

    }
    console.log(result);
}

divideArray([0, 1, 2, 3, 4, 5, 6], 2) 