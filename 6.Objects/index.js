// var obj1 = {
//     name: 'sachin',
//     age: 40,
//     play: () => {
//         console.log('play')


//     }
// }


// var obj2 = {
//     name: 'kohli',
//     age: 30,
//     play: () => {
//         console.log('play')

//     }
// }

// console.log(obj1)
// console.log(obj2)


// factory function way

// function test(name, age) {
//     return {
//         name: name,
//         age: age,
//         play: () => {
//             console.log('play')
//         }
//     }
// }
// var obj1 = test('sachin', 40)
// var obj2 = test('kohli', 30)
// console.log(obj1)
// console.log(obj2)

// constructor function way:

// function test(name, age) {
//     // console.log(this)
//     this.name = name;
//     this.age = age;
//     this.play = () => {
//         console.log('play')

//     }
// }
// var obj1 = new test('sachin', 40)
// var obj2 = new test('kohli', 30)
// console.log(obj1)
// console.log(obj2)

// classical way

// class test {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.play = () => {
//             console.log('play')
//         }
//     }


// }
// // console.log(typeof test)
// var obj1 = new test('sachin', 40)
// console.log(obj1)



//****object are dynamic*****

// var obj = {
//     name: 'sachin',
//     age: 40,
//     play: function test() {
//         console.log('play')
//     }
// }
// console.log(obj)


// 1.how to read or access properties

// console.log(obj.name)
// console.log(obj['name'])
// console.log(obj.age)
// console.log(obj['age'])

//how to access method in obj
// console.log(obj.play)
// obj.play()


// 2.how to add

// obj.color = 'red'

// 3.update object property
// obj.name = 'kohli'

// 4.how  to delete existing property

// delete obj.age

// how add new method to obj

// obj.go = () => {
//     console.log('go')
// }
// console.log(obj)

// how to delete method in obj

// delete obj.play
// console.log(obj)


// ***setters and getters ****

// var person = {
//     fname: 'virat',
//     lname: 'kohli',

//     // fullname: () => {
//     //     console.log(`${person.fname} ${person.lname}`)
//     // }

//     get fullname() {
//         // we use get  to access method as normal property
//         console.log(`${person.fname} ${person.lname}`)
//     },
//     set fullname(value) {
//         // we use set to update method
//         console.log(value)
//         var parts = value.split(' ')  //split string ni tesukoni array lo peduthundi
//         // console.log(parts)
//         person.fname = parts[0]
//         person.lname = parts[1]
//     }
// }
// console.log(person)
// // console.log(person.fname + " " + person.lname)
// // console.log(`${person.fname} ${person.lname}`)

// // person.fullname()


// person.fullname // to access method as a normal property by using getter function

// person.fullname = 'venkat ravali' // to update this we have to setter otherwise it will not update

// console.log(person)
// person.fullname


// ***** how to iterate object ****


// var person = {
//     name: 'sachin',
//     age: 40,
//     play: function test() {
//         console.log('play')
//     }
// }
// console.log(person)

// for (var key in person) {
//     console.log(key, person[key])
// }

// for (var value of person) {
//     console.log(value) // error
// }

// var keys = Object.keys(person)
// console.log(keys)

// var values = Object.values(person)
// console.log(values)

// var entries = Object.entries(person)
// console.log(entries)

