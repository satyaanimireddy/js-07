// var arr = [1, 2, 3, 4, 5]

// console.log(arr);
// for (var value of arr) {
//     console.log(value);
// }

// var iterable = [1, 2, 3, 4, 5]
// console.log(iterable);

// without using for of loop
// var iteratorObj = iterable[Symbol.iterator]()
// console.log(iteratorObj.next());
// console.log(iteratorObj.next());
// console.log(iteratorObj.next());
// console.log(iteratorObj.next());
// console.log(iteratorObj.next());
// console.log(iteratorObj.next());


// for (var value of iterable) {
//     console.log(value);
// }

// ** how to convert non-iterable data structure into iterable data structure **
// var person = {
//     faname: 'virat',
//     lName: 'kohli'
// }


// var iteratorObj = person[Symbol.iterator] = function () {
//     var properties = Object.keys(person)
//     // console.log(properties);

//     var count = 0

//     var isDone = false

//     var next = () => {
//         if (count >= properties.length) {
//             return { done: true, value: "" }
//         }
//         return { done: isDone, value: this[properties[count++]] }
//     }
//     return { next }  //iterator object,it has next method
// }
// var iteratorObj = person[Symbol.iterator]()

// console.log(iteratorObj.next());
// console.log(iteratorObj.next());

// for (var value of person) {
//     console.log(value);
// }