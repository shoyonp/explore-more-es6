const numbers = [4, 3, 23, 2, 9, 8];
const total = numbers.reduce( (previous, current) => previous + current , 0)
console.log(total);

const sum = numbers.reduce( (p, c) => p+c , 0)
console.log(sum);