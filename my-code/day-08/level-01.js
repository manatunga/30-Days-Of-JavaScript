const dog = {
    name: 'Max',
    legs: 4,
    color: 'Brown',
    age: 3,
    bark: () => 'woof woof'
};

console.log(dog);
console.log(dog.bark());

dog.breed = 'German Shephard';
dog.getDogInfo = () => console.log(dog);

dog.getDogInfo();

