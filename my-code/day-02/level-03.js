let sentence1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(sentence1.match(/love/gi));

let sentence2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence2.match(/because/gi));



const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

let regEx = /[^\w\s]/gi;

const newSentence = sentence.toLowerCase().replace(regEx, '');
let words = newSentence.split(' ');

const wordCounts = {};
for (const word of words) {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
}

console.log(wordCounts);



const text =  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let regEx2 = /\d+/g

let euros = text.match(regEx2);
console.log(euros);

let amount = 0
for (let i = 0; i < euros.length; i++) {
    amount = amount + parseInt(euros[i]);
}
console.log(`Toatal Annual Income: ${amount} euros.`);