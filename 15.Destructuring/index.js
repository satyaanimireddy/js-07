
// var obj = {
//     name: "Kohli",
//     age: 40,
//     address: 'Delhi'
// }

// without destructuring:-

// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.address);

// with destructuring:-

// var { name, age, address } = obj  //destructuring
// console.log(name);
// console.log(age);
// console.log(address);

// var obj = {
//     name: "Kohli",
//     age: 40,
//     address: 'Delhi',
//     income: { cash: 100, cars: ["swift", "volvo", "balono"] }
// }
// console.log(obj.income.cash);
// console.log(obj.income.cars[2]);

// var { name, age, address, income } = obj
// var { cash, cars } = income
// var [c1, c2, c3] = cars

// var { name, age, address, income: { cash, cars: [c1, c2, c3] } } = obj //single line destructuring(it will give give only values ,not whole object or array)

// console.log(cash);
// console.log(c3);
// console.log(cars);
// console.log(obj.income.cars);


var arr = ["sachin", { address: { state: "mumbai", road: 101 }, children: ['arjun', 'sara'] }]

var [name, obj] = arr
// console.log(name);
// console.log(obj);

var { address, children } = obj
// console.log(address);

var { state, road } = address

// console.log(road);
// console.log(children);

var [n1, n2] = children

// console.log(n1);
// console.log(n2);

// var [name, { address: { state, road }, children: [n1, n2] }] = arr

console.log(name);
console.log(state);
console.log(road);
console.log(n1);
console.log(n2);