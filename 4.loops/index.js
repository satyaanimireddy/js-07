// conditional loop

// for loop

// var name1 = 'satya'

// for (var i = 1; i <= 100; i++) {
//     console.log(i, name1)
// }

// while-

// var i = 1
// while (i <= 100) {
//     console.log(i, name1)
//     i++
// }

// do while

// i = 101
// do {
//     console.log(name1)
//     i++
// } while (i <= 100)

// infinity loop(don"t use this loop)

// for (var i = 1; i > 0; i++) {
//     // console.log('hello')
// }

//break

// for (i = 1; i <= 100; i++) {
//     if (i === 50) {
//         break;
//     }
//     console.log(i)
// }

// var i = 1

// while (i <= 100) {
//     if (i === 50) {
//         break
//     }
//     console.log(i)

//     i++
// }

// var i = 1

// do {
//     if (i === 50) {
//         break
//     }
//     console.log(i)
//     i++
// } while (i <= 100)


// console.log('b' + "a" + " " + "a" + "a")

//infinity-loop : break working

// for (var i = 1; i > 0; i++) {
//     if (i === 10000) {
//         break
//     }
//     console.log(i)

// }

// continue

// for (var i = 1; i <= 100; i++) {
//     if (i === 50) {
//         continue
//     }
//     console.log(i)
// }

// var i = 1
// while (i <= 100) {
//     if (i === 50) {
//         i++ //we need to  give this
//         continue
//     }
//     console.log(i)
//     i++
// }
// var i = 1
// do {
//     if (i === 50) {
//         i++  //we need to  give thi=
//         continue
//     }
//     console.log(i)
//     i++
// } while (i <= 100)

// for (var i = 1; i > 0; i++) {
//     if (i === 10) {
//         continue
//     }
//     if (i === 50) {
//         break
//     }
//     console.log(i)

// }

// =>unconditional loops

// for of loop:

// var person = {}
// console.log(person)

// var array = []
// console.log(array)

// var person = {
//     name: 'sachin',
//     age: 40,
//     height: 5,
//     color: 'red'
// }
// console.log(person)

//without using loop

// console.log(person.name)
// console.log(person.age)
// console.log(person.height)
// console.log(person.color)

//with using loop

// for (var key in person) {  // this is non-iterable data structure,we can not use( for of loop)
//     console.log(key, person[key])
//     // console.log(key + ":" + person[key])
// }


var array = [1, 2, 3, 4, 5]

// console.log(array)

//without using loop:

// console.log(array[0])
// console.log(array[1])
// console.log(array[2])
// console.log(array[3])
// console.log(array[4])

//with loop:

for (var values of array) {  // it will loop directly values  not keys
    console.log(values)
}

for (var keys in array) { // it will loop keys, it in not preferable for iterable data structure 
    console.log(keys, array[keys])
}


