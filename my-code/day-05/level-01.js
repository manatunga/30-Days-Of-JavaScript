const arr1 = [];
const webTechs = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'
];

console.log(`Length of webTechs: ${webTechs.length}`);
console.log(
    `First item: ${webTechs[0]} 
    \nMiddle Item: ${webTechs[(webTechs.length - 1) / 2]} 
    \nLast Item: ${webTechs[webTechs.length - 1]}`
);



const mixedDataTypes = [
    'janitha',
    'manatunga',
    20,
    true,
    {'country': 'Sri Lanka'},
    ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']
];
console.log(`Length of mixedDataTypes: ${mixedDataTypes.length}`);



const itCompanies = [
    'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'
];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(
    `First item: ${itCompanies[0]} 
    \nMiddle Item: ${itCompanies[(webTechs.length - 1) / 2]} 
    \nLast Item: ${itCompanies[webTechs.length - 1]}`
);
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
};

const itCompaniesExceptLast = itCompanies.slice(0, itCompanies.length - 1);
console.log(
    `${itCompaniesExceptLast.join(', ')} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`
);

let company = 'Nvidia';
itCompanies.includes(company)
    ? console.log(company) : console.log('Company is not found');


const ooItCompanies = [];
for (const company of itCompanies) {
    const oCount = (company.toLowerCase().split('o').length - 1);

    if (oCount > 1) {
        ooItCompanies.push(company);
    }
}
console.log(ooItCompanies);

// console.log(itCompanies.sort());
// console.log(itCompanies.reverse());
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));

if (itCompanies.length % 2 === 0) {
    console.log(itCompanies.slice(itCompanies.length / 2, itCompanies.length / 2 + 1));
} else {
    console.log(itCompanies.slice((itCompanies.length - 1) / 2, (itCompanies.length + 1) / 2));
}

console.log(itCompanies.pop());