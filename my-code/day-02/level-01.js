let challenge = '30 Days of JavaScript';
console.log(challenge);
console.log(challenge.length);

console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());

console.log(challenge.substring(0, 2));
console.log(challenge.substring(3, 21));

console.log(challenge.includes('Script'));

console.log(challenge.split());
console.log(challenge.split(' '));

let corps = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(corps.split(', '));

console.log(challenge.replace('JavaScript', 'Python'));

console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(challenge.search('J')));

console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
console.log(sentence.lastIndexOf('because'));
console.log(sentence.search('because'));

challenge = ' 30 Days of JavaScript ';
console.log(challenge);
console.log(challenge.trim());

challenge = '30 Days of JavaScript';
console.log(challenge.startsWith('3'));
console.log(challenge.endsWith('t'));

console.log(challenge.match(/a/gi));

challenge1 = challenge.substring(0, challenge.indexOf('f') + 1)
console.log(challenge1);
console.log(challenge1.concat(' JavaScript'));

console.log(challenge.repeat(2));