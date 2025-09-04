
// interview -q1:-
// let str = "code code js code js fun"

// let freq = str.split(" ").reduce((acc, word) => {
//     acc[word] = (acc[word] || 0) + 1
//     return acc
// }, {})
// console.log(freq); //{ code: 3, js: 2, fun: 1 }

// interview -q2:-

//Output based questions:-

// interview -q3:-

// const a = 1 < 2 < 3
// console.log(a)

// const b = 1 > 2 > 3
// console.log(b)

// interview -q4:-

// let str = 'jscafe'
// str[0] = 'c'
// console.log(str) //jscafe no change
//**strings are immutable in javascript. we cannot change individual characters using index numbers we can modify the string with re-assignment

// interview -q5:-

// console.log(5 > '15' < 5)
//*javascript typecoercion convert string into Number output is true

// interview -q6:-

// console.log(1)
// setTimeout(() => {
//     console.log(2)
// }, 1000)
// setTimeout(() => {
//     console.log(3)
// }, 0)
// console.log(4)

//*local storage data persist even on page reload, local storage persist multiple tabs
//*session storage doesn't persist when another tag is opened , yes its session storage persist when page reload

// interview -q7:-

// num = 6
// console.log(num) //ReferenceError: Cannot access 'num' before initialization(with let num) //SyntaxError: Missing initializer in const declaration(with const)
// let num;
// *reference error we are trying to access before declaration. its because temporal dead zone

// num = 6
// console.log(num) // 6 (with var)
// var num;
// **In JavaScript, variable declarations using var are hoisted to the top of their scope (i.e., moved to the top of the function or global context), but not their initializations.
// Summary of above question:
// var num; is hoisted to the top.
// Then num = 6; assigns the value.
// console.log(num); logs 6.

// console.log(typeof typeof 1)  //String
//*we get string as the output of type of 1 is 'number' which is returned as a string

// interview -q8:-

// const numbers = [1, 2, 3, 4, 5]
// const [y] = numbers
// console.log(y) // 1 (because of destructing)

// interview -q9:-

// const a = 2
// const b = new Number(2)
// console.log(b); //[Number: 2] (new number returns object)
// console.log(a == b) //true
// console.log(a === b) //false

// interview -q10:-

// console.log(3 + 4 + '5') // 75 (due to typecoersion combined together and form '75')

// interview -q11:-

// let num = 0
// console.log(num++) // 0
// console.log(num) // 1
// console.log(++num) // 2

// interview -q12:-

// let x = 1 < 2 < 3
// console.log(x) //true

// interview -q13:-

// getData1() //hello
// getData2() // TypeError: getData2 is not a function(if we try to call the arrow function before  )
// function getData1() {
//     console.log('hello')
// }
// var getData2 = () => {
//     console.log('im sai')
// }
//**getData 1 is hoisted on to the top, we can call the function before actual declartion. we are creating an arrow function and assigning it to variable which is declared using var. it will be hoisted to be top . whem ever we call function undefined with parenthesis, . we cannot access undefined with parenthesis throw a type error called 'not a function'

// interview -q14:-

// function func() {
//     try {
//         console.log(1)
//         return  //(return is called → BUT JavaScript does not exit the function immediately yet — it still executes the finally block.)
//     } catch (e) {
//         console.log(2)
//     } finally {
//         console.log(3)
//     }
//     console.log(4) //Now the function actually returns — skipping any code after the finally.(That means: console.log(4) is never executed),if commented the return then it will be execute
// }
// func()
// // output: 1 3

// interview -q15:-

// function job() {
//     return new Promise((resolve, reject) => {
//         reject() // 3
//         // resolve() // 1 2

//     })
// }
// let promise = job()
// promise.then(() => {
//     console.log(1)
// }).then(() => {
//     console.log(2)
// }).catch(() => {
//     console.log(3)
// })
//**promise has 3 states, pending, fulfilled, rejected. success case handled by .then() and failure case handled by .catch() and printed 3 which eventually means our promise is done now.

// interview -q16:-

// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log("value is", i); // 10 prints 10 times (with var) //(0 t 9 with let)
//     }, 1000 * i)
// }

// **This code sets up a loop that iterates 10 times, scheduling a setTimeout function at each iteration. Let's go through it step-by-step:
// 1. for (var i = 0; i < 10; i++)
// This for loop initializes i to 0 and increments it by 1 in each iteration until i reaches 10.
// Because i is declared with var, it is scoped to the function in which the loop resides, not just to the loop block. This scoping affects how setTimeout interacts with i.
// 2. setTimeout(function() { console.log("value is", i); }, 1000 * i);
// In each iteration, setTimeout schedules a function to run after a delay.
// 1000 * i sets a different delay for each setTimeout:
// When i is 0, the delay is 0 ms, so the message logs almost immediately.
// When i is 1, the delay is 1000 ms (1 second).
// When i is 2, the delay is 2000 ms (2 seconds).
// This pattern continues, adding 1 second to each subsequent call.
// 3. What Happens with var i?
// Since i is declared with var, by the time the setTimeout callback runs, the loop has already finished, and i has reached 10.
// As a result, all setTimeout callbacks log i as 10, not the value of i at the time they were created.
// So the output after 10 seconds would look like:

// Copy code
// value is 10
// value is 10
// value is 10
// ...
// (value is 10 repeated 10 times)
// Fixing It
// To log the correct i for each callback, you can use let instead of var, which creates a new instance of i for each iteration, or use a closure (like the IIFE example in my previous answer). Here’s a quick recap using let:

// javascript
// Copy code
// for (let i = 0; i < 10; i++) {
//   setTimeout(function() {
//     console.log("value is", i); //(0 t 9 with let)
//   }, 1000 * i);
// }

// interview -q17:-

// console.log([]==[])
//*it compares reference not values, references are stores in different memory locations

// interview -q18:-

// const name = 'saiKrishna'
// age = 21
// console.log(delete name) //false
// console.log(delete age) //true
// // //**delete operator works in object . to delete properties in object. it does not have any effect in var let and const. age =21 assigning to global object. due to its return true
// console.log(name); //saiKrishna
// console.log(age); //ReferenceError: age is not defined

// interview -q19:-

// let arr = [1].push(2)
// console.log(arr); // 2 (push method returns length of the array)

// let newList = [1].push(2)
// console.log(newList.push(3))
// //*it will throw an error, because push method returns length of the array. not an array... in the length of the error pushing value. it gives an error

// interview -q20:-

// var employeeId = 'abc'
// function foo() {
//     var employeeId = '123';
//     return;
//     function employeeId() {
//     }
// }
// foo()
// console.log(employeeId) //abc

//summary of above question:-
// //** Here, a function declaration function employeeId() {} exists after the return, but due to JavaScript's hoisting, this function declaration is hoisted to the top of the function scope. So the actual behavior of foo() looks like this to the JavaScript engine:
// // *** function foo() {
//     function employeeId() {
//     }
//     employeeId = '123';
//     return;
// }
// //**So, within the scope of foo(), employeeId refers to the local function, not the global variable. */
// //**This overwrites the local function employeeId with the string '123'. It does not touch the global employeeId. */

// interview -q21:-

// var a = 500
// function foo() {
//     a = 200
// }
// foo()
// console.log(a) //200 (because 500 is overrides with 200 it treated as a global variable)

// interview -q22:-

// const a = {}
// const b = { key: 'b' }
// const c = { key: 'c' }
// a[b] = 146
// a[c] = 286
// console.log(a[b]) //286

//**summary:-
//When you use an object as a key in another object (a[b]), JavaScript implicitly converts the object key to a string — specifically by calling b.toString().

// For plain objects, {}.toString() returns:'[object Object]'
// a[b] = 146; // becomes a['[object Object]'] = 146;
// a[c] = 286; // also becomes a['[object Object]'] = 286;
// Thus, the second assignment overwrites the first one.
// So, what does a[b] resolve to? // a['[object Object]'] // 286
//So console.log(a[b]) logs: // 286
// **If you need to use objects as keys without converting them to strings, you should use a Map instead:
// const a = new Map();
// a.set(b, 146);
// a.set(c, 286);
// console.log(a.get(b)); // 146


// interview -q23:-

// const a = {
//     count: 0
// }
// const b = a;
// b.count = a.count++
// console.log(b.count, a.count)
//**we assigning object a to b, it will share the same memory location, if we change any property in obj b it will reflect in object so a.count++ is assigned to b.count we are assigning a.count value to b.count it will log 0 and 1

// interview -q24:-

// const arr1 = [1, 2, 3]
// const str = "1,2,3"
// console.log(arr1 == str)
// **javascript automatically convert to common type. Array.prototype.toString() array into String so the log true

// interview -q25:-

// let a = 5
// let b = a++
// console.log(b); // 5 it will post increase
// console.log(a + b) // 11 (5+6)

// interview -q26:-

// var x = 1
// console.log(x)
// function x() {
//     console.log("2")
// }
// x()
// ** x will be logged as 1 and we are trying to invoke the x () as 1 and it throws an error x is not a function

// interview -q27:-

// function sum(a = 5, b = 7) {
//     console.log(a + b)
// }
// sum(null, 20)  // null is considered as value it replaces to 5
//**default values considered only when we sending undefined or no value. the property should be given to arguments

// interview -q28:-

// var arrA = [1, 2, 3]
// var arrB = arrA.slice()
// arrB[0] = 0
// console.log(arrA) // [1,2,3]
//**slice method is used to create a shallow copy, when we are trying to change in array it will not reflect in arrA console.log arr A it will give [1,2,3]

// interview -q29:-

// let person = { name: 'sai' }
// const members = [person]
// person = null
// console.log(members) // [ { name: 'sai' } ]
// console.log(person) // null
// **Step-by-step Breakdown:
// 1. let person = { name: 'sai' }
// Creates an object { name: 'sai' }
// Variable person holds a reference to that object.
// 2. const members = [person]
// members is an array that contains a reference to the same object that person points to.
// 3. person = null
// This doesn't delete the object — it just makes person stop pointing to it.
// The object { name: 'sai' } still exists in memory because members[0] is still referencing it.
// **Even after person = null, the object isn’t deleted or garbage collected because members still references it. JavaScript uses reference counting and reachability to manage memory.

// interview -q30:-

// const box = {
//     x: 5, y: 10
// }
// Object.freeze(box) // By using freeze we can not modify properties (we can't add new properties and delete existing)
// box.x = 100
// console.log(box) // { x: 5, y: 10 }

// interview -q31:-

// new Promise(() => {
//     console.log('d')
// })
// console.log('e')
//**initially we creating promise, without resolve, reject, it will run synchronously, then it will log console.log(e)

// interview -q32:-

// console.log([1, 2] + ![]) //1,2false
//**the empty array considered as true and negotiation it will convert into false, when ever addition operator non-primitive to primitive expression. javascript will covert into primitive, because of type coercion

// interview -q33:-

// const arr1 = [1, 2, [3, 4]]
// const arr2 = JSON.parse(JSON.stringify(arr1))
// arr2[1] = 10
// arr2[2][0] = 100
// console.log(arr1) //[ 1, 2, [ 3, 4 ] ]
// console.log(arr2) //[ 1, 10, [ 100, 4 ] ]

// interview -q34:-

// let str = 'sai'
// str.length = 0
// console.log(str.length); //3 (we cannot modify properties like length)
// console.log(str) //sai
// //**in javascript strings are immutable in nature, we cannot modify characters in string. **we cannot modify properties like length

// interview -q35:-

// x++
// console.log(x) //NaN
// var x = 10
//**due to its hoisting, var declaration moving to top of their scope, var x is undefined. we are tring to increment undefined into increment so its result is NAN

// interview -q36:-

// function data() {
//     const a = b = 5
//     console.log(a); // 5
//     console.log(b); // 5
// }
// data()
// console.log(b) //5
// // console.log(a) // a is not defined
//**in javascript, without assigned value  without declaration. like let, var, const it will be assigned to global object

// interview -q37:-

// setTimeout(() => {
//     console.log('1')
// })
// console.log('2')

// interview -q38:-

// const data = {
//     id: '1'
// }
// Object.freeze(data)
// data.id = '2'
// console.log(data.id)
// **whenever we declare variable with const, it cannot be reassigned, we are modifying properties of an object we can stop the modification by object.freeze()

// interview -q39:-

// const x = [1, 2, 3]
// delete x[1]
// console.log(x.length)
// console.log(x) //[ 1, <1 empty item>, 3 ]
//**we are using delete operator to delete the element in array. it will replace with empty element and the number of elements will be same. the perfect way to delete the elements in array using pop and splice method

// interview -q40:-

// (function (num) {
//     console.log(num * num)
// }
// )(false)
//**it is an IIFE, which will be executed as soon as it crated. when ever arithmetic operation peformed with boolean values it will return as o , o will be sending to the parameter and calculating 0 with 0 so it returns 0

// interview -q41:-

// let x = "Learn"
// console.log(x.substring(5, 1))
// ***How substring(start, end) works in JavaScript:
// It extracts characters from start up to but not including end.
// If start > end, JavaScript swaps the two values internally.
// If any index is out of bounds (less than 0 or greater than string length), it gets clamped.

// interview -q42:-

// let a = []
// let b = false
// console.log(a == b) //true
// **Convert [] to primitive
// When an array is compared loosely, it’s converted to a primitive string, then to a number if necessary:
// [].toString() → ""
// Number("") → 0
// So [] becomes 0.
// **Convert false to number
// Number(false) → 0.
//**when ever we compare two different types, js automatically convert in to common type, [] and false converted into 0 as both values are equal it will returns true

// interview -q43:-

// const data = {
//     name: 'sai',
//     name: 'krishna'
// }
// console.log(data.name)
//**the output for the above is krishna. it will override the names

// interview -q44:-

// let a = [1]
// let b = [2]
// console.log(a + b) // 12
// **How arrays behave:
// When an array is converted to a primitive (like when used in +), JavaScript calls:
// a.toString()
// b.toString()
// [1].toString() → "1"
// [2].toString() → "2"
// "1" + "2"  // "12"
//**whenever we use an addition operation between two arrays. js internally convert arrays to strings by to string() so the answer is '12'
// console.log(a[0] + b[0])  // 3

// interview -q45:-

// if (false) {
//     var a = 'sai'
// }
// console.log(a) //undefined
// **Reason: var a is hoisted to the top (declared, but not assigned).
// So a exists in scope, but since the block never runs, it stays undefined.
//*javascript skips condition it contains false, var can be hoisted top of their scope, var defined with undefined so output will be undefined

// console.log(b); //undefined
// if (true) {
//     var b = 'sai'
// }
// console.log(b) //sai

// interview -q46:-

// var a
// console.log(a)  // undefined
// a = 5

// b = 10
// console.log(b)  // 10
// var b

// interview -q47:-

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 100) // 3 3 3
// }
// // *Because var is function-scoped, it causes unexpected behavior in loops with asynchronous functions:
// // *All callbacks share the same i (final value = 3).

// interview -q48:-

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 100) // 0 1 2
// }

// for (var i = 0; i < 3; i++) {
//     console.log(i) //o 1 2
// }

// interview -q49:-

// var g = 100
// console.log(window.g)  // 100 (in browser)

// let h = 200
// console.log(window.h)  // undefined

// interview -q50:-

// let timer = setTimeout(() => {
//     console.log('hello')
// })
// clearTimeout(timer)
// **setTimeout:
// setTimeout schedules the given callback (() => console.log('hello')) to run after a delay (default is 0ms if no delay is passed).
// It returns an ID (a numeric value in browsers, or a Timeout object in Node.js).
// That ID is stored in timer.
// **clearTimeout:
// clearTimeout(timer) cancels the scheduled timeout before it executes.
// Since you immediately cleared it, the callback never runs.
// **No output at all — the console.log('hello') is never reached.

// interview -q51:-

// var x = 1;
// let y = 1;
// {
//     var x = 2; //reassigns the same global x. (Because var is not block-scoped.)
//     let y = 2;
// }
// console.log(x, y) //2 1

// interview -q52:-

// const strng = "12345";
// let totalVal = 0;
// for (var i = 0; i < strng.length; i++) {
//     let indexVal = strng[i];
//     console.log(indexVal);
//     totalVal = totalVal + Number(indexVal);
// }
// console.log(totalVal);

// or

// const strng = "12345";
// const totalVal = strng
//     .split("")
//     .reduce((sum, digit) => sum + Number(digit), 0);
// console.log(totalVal); // 15

// or

// const strng = "12345";
// const totalVal = [...strng].reduce((sum, digit) => sum + Number(digit), 0);
// console.log(totalVal); // 15
// **[...strng] → spreads "12345" into an array: ["1", "2", "3", "4", "5"]
// .reduce(...) → iterates and accumulates the sum
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15



// // *** interview -q53 question start *** //

// const studentList = [
//     {
//         name: "test1",
//         age: 25,
//         city: "chennai"
//     },
//     {
//         name: "test2",
//         age: 20,
//         city: "hyderabad",
//         state: "Telengana"
//     },
//     {
//         name: "test3",
//         age: 20,
//         city: null
//     }
// ];
// // name: "test1" --> valid metric
// // city: null --. in valid metric

// // const result = studentList.map((student) => {
// //     return Object.values(student).filter(value => value !== null && value !== undefined).length
// // })
// // console.log(result); // [3, 4, 2]
// // ***Object.values(student) → gets all values of the current student object.
// // .filter(value => value !== null && value !== undefined) → filters only valid (non-null, non-undefined) values.
// // .length → counts how many valid values exist for each student.

// // ****** using keys*** //
// const validKeys = ["name", "age", "city", "state"];
// const result2 = studentList.map(student => {
//     return validKeys.filter(key => student[key] !== null && student[key] !== undefined).length;
// });
// console.log(result2); // [3, 4, 2]
// // **Explanation :
// // validKeys → list of keys you care about.
// // For each student, we:
// // Check only those keys.
// // Count how many of them are not null and not undefined.
// // Result: [3, 4, 2]

// // *** interview -q53 question end *** //

// // *** interview -q54 question start *** //

// let arr = [
//     { name: 'Yaswanth', tech: 'React JS' },
//     { name: 'Sathish', tech: 'Java' },
//     { name: 'Suri', tech: 'React JS' },
//     { name: 'Rohit', tech: 'Java' },
//     { name: 'Abhishek', tech: 'GoLang' },
//     { name: 'Ratna', tech: 'GoLang' }
// ]

////expected op: {
////     "React JS": ['Yaswanth', 'Suri'],
//  //       "Java": ['Sathish', 'Rohit'],
//    //         "GoLang": ['Abhishek', 'Ratna']
// }//

// const output = {}
// arr.forEach(item => {
//     if (output[item.tech]) {
//         output[item.tech].push(item.name)
//     } else {
//         output[item.tech] = [item.name]
//     }
// })
// console.log(output)

// // *** interview -q54 question end *** //

// // *** interview -q55 question start *** //

// what will be the op:-
// for (var i = 0; i < 5; i++) {
//     var btn = document.createElement("button");
//     btn.appendChild(document.createTextNode("Button " + i));
//     btn.addEventListener("click", function () {
//         console.log(i);
//     });
//     document.body.insertBefore(btn, document.body.firstElementChild);
// }
// // *** interview -q55 question end *** //

// // *** interview -q56 question start *** //

// const Transactions = [
//     { type: "credit", amount: 500 },
//     { type: "debit", amount: 200 },
//     { type: "credit", amount: 150 },
//     { type: "debit", amount: 100 },
// ]
// // expected output :350

// const netBalance = Transactions.reduce((acc, transaction) => {
//     return transaction.type === "credit"
//         ? acc + transaction.amount
//         : acc - transaction.amount;
// }, 0);

// console.log(netBalance)

// // *** interview -q56 question end *** //
