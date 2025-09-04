let arr = [1, 2, 3, 4, 5, 6, 7]

// console.log(arr.includes(5));
// console.log(arr.includes((n) => n === 5)); // it is not working
console.log(arr.some((n) => n === 7));
console.log(arr.every((n) => n === 7));

