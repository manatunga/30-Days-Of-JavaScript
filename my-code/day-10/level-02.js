const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

const setA = new Set(a);
const setB = new Set(b);

const setAuB = new Set([...a, ...b].sort((a, b) => a - b));
console.log(setAuB);

const setAnB = new Set(a.filter((num) => setB.has(num)).sort((a, b) => a - b));
console.log(setAnB);