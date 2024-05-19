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

//*****math object***

// var x = 20
// var y = 30

// console.log(Math.min(x, y, 40, 60))
// console.log(Math.max(x, y, 40, 60))
// console.log(Math.floor(20.9))
// console.log(Math.floor(20.1))
// console.log(Math.ceil(20.1))
// console.log(Math.ceil(20.8))
// console.log(Math.round(20.8))
// console.log(Math.round(20.5))
// console.log(Math.round(20.4))
// console.log(Math.floor(Math.random()))
// console.log(Math.ceil(Math.random()))
// console.log(Math.floor(Math.random() * 10))
// console.log(Math.floor(Math.random() * 100))
// console.log(Math.floor(Math.random() * 1000))
// console.log(Math.floor(Math.random() * 10000))
// console.log(Math.pow(10, 2))
// console.log(Math.sqrt(25))
// console.log(Math.sqrt(9))

// console.log(Math)

// ***interview question**

// // console.log(x)  //x is not defined (it is not in the memory)
// x = 100  // here we did't use var,let,const keywords
// console.log(x)

// ***date object ***

// var now = new Date()
// console.log(now)

// // get methods:
// console.log(now.getDate())
// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getHours())
// console.log(now.getMinutes())

// // set methods:

// now.setFullYear(2050)
// now.setDate(20)
// now.setMonth(11)

// console.log(now)
// console.log(now.getDate())
// console.log(now.getFullYear())
// console.log(now.getMonth())


// var date1 = new Date(2040, 6, 20, 10, 20, 40) //number data type
// console.log(date1)

// // get method

// console.log(date1.getFullYear())
// console.log(date1.getDate())
// console.log(date1.getMonth())
// console.log(date1.getHours())
// console.log(date1.getMinutes())
// console.log(date1.getSeconds())

// // set methods:

// date1.setFullYear(2000)
// date1.setDate(10)
// date1.setMonth(10)
// console.log(date1)

// var date2 = new Date('1990 dec 31 9:15:30')
// console.log(date2)
// console.log(date2.getFullYear())
// console.log(date2.getMonth())
// console.log(date2.getDate())
// console.log(date2.getDay())
// console.log(date2.getHours())
// console.log(date2.getMinutes())
// console.log(date2.getSeconds())

// // get methods:

// date2.setFullYear(2018)
// date2.setMonth(2)
// date2.setDate(20)
// date2.setHours(5)
// date2.setMinutes(40)

// console.log(date2)   


//*****template string****

var name = 'sachin'
var age = 40
//without string literals(concat)
console.log('Hi' + " " + name + " " + 'How are you ?' + " " + 'age is ' + age)
//with string literals

console.log(`Hi ${name} how are you ? age is ${age}`)
