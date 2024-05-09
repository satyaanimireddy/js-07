//function declaration

// var x = 10
// function test() {
//     var x = 100
// }
// test()

//function expression

// var x = 10
// var hello = function test() {
//     var x = 100
// }
// hello()

// parameters vs arguments

// var test = (a, b, c) => {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// test(1, 2, 3)

//default parameters:

// function test(a = 1, b = 2, c = 3, d = 4, e = null, f = undefined) {
//     console.log(a) //10
//     console.log(b)  //ture
//     console.log(c)  //3 here not preference to undefined
//     console.log(d)  // null
//     console.log(e)
//     console.log(f)
// }
// test(10, true, undefined, null, undefined, null)

// Varying pf params vs arguments:

// function test(a, b, c) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(a + b + c)
// }
// test(1, 2)


//arguments object(es-5)

// function test() {
// console.log(arguments)
// console.log(typeof (arguments))
// console.log(Array.isArray(arguments))

// console.log(arguments[0])
// console.log(arguments[1])
// console.log(arguments[2])
// console.log(arguments[3])
// console.log(arguments[4])

// for (var value in arguments) {
//     console.log(value)
// }

//     var sum = 0

//     for (var value of arguments) {
//         console.log(value)
//         sum += value
//         console.log(sum)

//     }
//     return sum
// }
// console.log(test(1, 2, 3, 4, 5))


// rest Operator(es-6)

// function test(...rest) {
//     // console.log(rest)
//     // console.log(typeof (rest))
//     // console.log(Array.isArray(rest))

//     // without using loop

//     // console.log(rest[0])
//     // console.log(rest[1])
//     // console.log(rest[2])
//     // console.log(rest[3])
//     // console.log(rest[4])

//     //by using for of loop
//     // for (var value of rest) {
//     //     console.log(value)
//     // }

//     //
//     // var sum = 0
//     // for (var value of rest) {
//     //     console.log(value)
//     //     sum += value
//     // }
//     // return sum

//     return rest.reduce((cum, cur) => {
//         console.log(cum, cur)
//         return cum + cur
//     }, 0)

// }
// // test(1, 2, 3, 4, 5)
// console.log(test(1, 2, 3, 4, 5))