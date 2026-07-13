class Statistics {
    constructor (arr) {
        this.arr = arr;
    }
    count() {
        return this.arr.length;
    }
    sum() {
        return this.arr.reduce((sum, num) => sum += num, 0);
    }
    min() {
        return this.arr.sort((a, b) => a - b)[0];
    }
    max() {
        return this.arr.sort((a, b) => b - a)[0];
    }
    range() {
        return this.max() - this.min();
    }
    mean() {
        return this.sum() / this.count();
    }
    median() {
        const midPosition = 0;
        this.count() % 2 === 0 
            ? midPosition = this.count() / 2
            : midPosition = (this.count() + 1) / 2;
        return this.arr[midPosition];
    }
}