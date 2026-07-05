const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort()
console.log(`Min Age: ${ages[0]}, and Max Age: ${ages[ages.length - 1]}`);

if (ages.length % 2 === 0) {
    console.log(ages.slice(ages.length / 2, ages.length / 2 + 1));
} else {
    console.log(ages.slice((ages.length - 1) / 2, (ages.length + 1) / 2));
}

let ageSum = 0
for (age in ages) {
    ageSum += ages[age];
}

const meanAge = ageSum / ages.length
console.log(`Average age: ${meanAge}`);

console.log(`Range of ages: ${ages[ages.length - 1] - ages[0]}`);

console.log(`min - average = ${Math.round(Math.abs(ages[0] - meanAge))}`);
console.log(`max - average = ${Math.round(Math.abs(ages[ages.length - 1] - meanAge))}`);
