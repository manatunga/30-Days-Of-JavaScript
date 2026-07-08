// const fullName = () => console.log('Janitha Manatunga')
const fullName = (firstName, lastName) => firstName + ' ' + lastName;
console.log(fullName('Janitha', 'Manatunga'));

const addNumbers = (a, b) => a + b;
console.log(addNumbers(1, 2));

const areaOfRectangle = (l, w) => l * w;
console.log(areaOfRectangle(4, 5));

function perimeterOfRectangle(l, w) {
    return 2 * (l + w);
}
console.log(perimeterOfRectangle(3, 5));

const volumeOfRectPrism = (l, w, h) => l * w * h;
console.log(volumeOfRectPrism(5, 6, 7));

const areaOfCircle = (r) => Math.round(Math.PI * r * r);
console.log(areaOfCircle(5));

function findBMI(weight, height) {
    const bmi = weight/(height * height)

    if (bmi >= 30) {
        return 'obese';
    } else if (bmi >= 25) {
        return 'overweight';
    } else if (bmi >= 18.5) {
        return 'normal weight';
    } else {
        return 'underweight';
    }
}
console.log(`You are ${findBMI(68, 1.72)}`);