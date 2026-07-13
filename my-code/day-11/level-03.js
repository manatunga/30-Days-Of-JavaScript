const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
const [ name, skills, scores ] = student;
const [, , jsScore, reactScore] = scores;

console.log(name, skills, jsScore, reactScore)



const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

const convertArrayToObject = arr => {
    const students = []
    for (const [ name, skills, scores ] of student) {
        const obj = {name: name, skills: skills, scores: scores };
        students.push(obj);
    }
    return students;
}
console.log(convertArrayToObject(students));