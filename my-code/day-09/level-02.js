import countries from '../day-06/level-03.js'

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];


// Find total price of products
const total = products
    .filter(({price}) => typeof price == 'number')
    .reduce((sum, product) => sum + product.price, 0);

console.log(total);


// Find countries with common patterns
const categorizeCountries = (pattern) => {
    return countries.filter((country) => country.toLowerCase().includes(pattern));
}
console.log(categorizeCountries('land'));


/* Create array of objects showing 
no. of times a country starts with each letter */
const countriesStartingWith = (countryList) => {
    const countryLetterPairs = countryList.reduce((acc, country) => {
        const letter = country.toUpperCase()[0]
        acc[letter] = (acc[letter] || 0) + 1;
        return acc;
    }, {});
    
    return Object.entries(countryLetterPairs)
    .map(([letter, count]) => ({ letter, count }));
}
console.log(countriesStartingWith(countries));


// Function to extract first ten countries
const getFirstTenCountries = (countryList) => {
    return countryList.sort().slice(0, 10);
}
console.log(getFirstTenCountries(countries));


// Function to extract last ten countries
const getLastTenCountries = (countryList) => {
    return countryList.sort().slice(countryList.length - 10, countries.length);
}
console.log(getLastTenCountries(countries));


// Find which letter is the most frequent first letter across countries
const mostFrequentFirstLetter = (countryList) => {
    const mostFrequent = countriesStartingWith(countryList)
    .reduce((acc, arr) => { 
        return acc.count < arr.count ? arr: acc;
    }, {letter: '', count:0});

    return `Most frequent first letter is ${mostFrequent.letter}!`
}

console.log(mostFrequentFirstLetter(countries));