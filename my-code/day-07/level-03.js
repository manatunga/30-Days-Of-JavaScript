// Function that generates a seven-character id
function userIDGenerator(numOfChars) {
    const alphaNumeric = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
        'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
        'U', 'V', 'W', 'X', 'Y', 'Z',
    ];

    const listOfIDCharacters = [];
    for (let i = 0; i < numOfChars; i++) {
        const randPicker = Math.floor(Math.random() * 62);
        listOfIDCharacters.push(alphaNumeric[randPicker]);
    }

    return listOfIDCharacters.join('');
}

function userIDGeneratedByUser(numOfChars, numOfIDs) {
    const listOfIDs = [];
    for (let i = 0; i < numOfIDs; i++) {
        const id = userIDGenerator(numOfChars);
        listOfIDs.push(id);
    }

    return listOfIDs.join('\n');
}

// console.log(userIDGeneratedByUser(5, 5));


// Function that generates rgb colors
const rgbColorGenerator = () => {
    const rgbValues = [];
    for (let i = 0; i < 3; i++) {
        const rgbValue = Math.floor(Math.random() * 256);
        rgbValues.push(rgbValue);
    }

    return `rgb(${rgbValues.join(',')})`;
}

console.log(rgbColorGenerator());


// Function that returns average of an array
const average = (arr) => {
    let sum = 0;
    arr.forEach((value) => sum += value);
    return sum/arr.length;
}
console.log(average([1, 2, 3, 4, 5]));