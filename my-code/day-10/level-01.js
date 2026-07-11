const countries = ['Finland', 'Sweden', 'Norway'];

const set = new Set();
for (let i = 0; i < 11; i++) {
    set.add(i);
}

set.delete(10);
set.clear();

const arr = ['hello', 'hi', 'hey', 'hiya', 'holla'];
const helloSet = new Set(arr);

const countriesMap = new Map(countries);
