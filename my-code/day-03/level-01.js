const firstName = 'Janitha'
const lastName = 'Manatunga'
const country = 'Sri Lanka'
const city = 'Colombo'
let age = 20
let isMarried = false

console.log(
    typeof firstName, typeof lastName,
    typeof country, typeof city,
    typeof age, typeof isMarried
);


console.log((typeof '10') == (typeof 10));
console.log(parseInt('9.8') == 10);


console.log(
    '' == false,
    '1' == 1,
    1 == true
);
console.log(
    '' == true,
    '1' === 1,
    4 < 3
);


console.log('python'.length != 'jargon'.length);
console.log(!('dragon'.search('on') == 'python'.search('on')));


let year = new Date().getFullYear()
console.log(year);
let month = new Date().getMonth() + 1
console.log(month);
let date = new Date().getDate()
console.log(date);
let day = new Date().getDay() + 1
console.log(day);
let hour = new Date().getHours()
console.log(hour);
let minute = new Date().getMinutes()
console.log(minute);
let unixTime = new Date().getTime() / 60
console.log(unixTime);