

// var obj = {}

// console.log(obj)
// console.log(obj.toString);
// console.log(obj.toString());

// var arr = []
// console.log(arr['toString']);

// var x = {}

// console.log(Object.getPrototypeOf(x));  //Object ni object base ani pilustharu
// console.log(x.__proto__);  //it is only used for console ,not use in any operations
// console.log(Object.prototype);

// var y = {}

// console.log(Object.getPrototypeOf(y));
// console.log(y.__proto__);
// console.log(Object.prototype);

// console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));




// var x = []

// console.log(Object.getPrototypeOf(x));  //Object ni object base ani pilustharu
// console.log(x.__proto__);  //it is only used for console ,not use in any operations
// console.log(Array.prototype);

// var y = []

// console.log(Object.getPrototypeOf(y));
// console.log(y.__proto__);
// console.log(Array.prototype);

// console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));


// var arr1 = []
// console.log(Object.getPrototypeOf(arr1));
// var arrBase1 = Object.getPrototypeOf(arr1)
// console.log(Object.getPrototypeOf(arrBase1));

// var arr2 = []
// console.log(Object.getPrototypeOf(arr2));
// var arrBase2 = Object.getPrototypeOf(arr2)
// console.log(Object.getPrototypeOf(arrBase2));



// function Test() {  //constructor function
// }

// var obj1 = new Test()
// var obj2 = new Test()

// console.log(Object.getPrototypeOf(obj1));
// console.log(Object.getPrototypeOf(obj2));

// console.log(Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2));



// var obj = {}
// var arr = []

// console.log(obj.constructor.prototype);
// console.log(arr.constructor.prototype);
// var arrBase = arr.constructor.prototype
// console.log(Object.getPrototypeOf(arrBase));

// console.log(Object.prototype);
// console.log(Array.prototype);

// ----------


// var obj = {}

// console.log(Object.getPrototypeOf(obj));
// console.log(obj.__proto__);
// console.log(Object.prototype);


// function Test() {
//     this.play = function () {
//         console.log('Own play method');
//     }
// }
// var obj1 = new Test()
// console.log(obj1);

// console.log(Object.getPrototypeOf(obj1));
// console.log(obj1.__proto__);
// console.log(Test.prototype);

// var arr = []

// console.log(arr);

// console.log(Object.getPrototypeOf(arr));
// console.log(arr.__proto__);
// console.log(Array.prototype);


// var obj = {
//     name: 'sachin'
// }

// console.log(obj.toString());

// obj.toString = () => {
//     console.log('own toString');
// }

// console.log(obj);
// console.log(obj.toString());

// for (var key in obj) {
//     console.log(key);
// }



// var obj = {
//     name: 'sachin'
// }

// var objectBase = Object.getPrototypeOf(obj)
// console.log(objectBase);

// var propertyDescriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString')
// console.log(propertyDescriptor);

// Object.defineProperty(obj, 'name', {
//     configurable: false,  //delete
//     enumerable: false,  //loop
//     writable: false    //update
// })

// // delete obj.name
// // obj.name = 'kohli'
// console.log(obj);
// console.log(Object.keys(obj));  //own properties ni loop chesthadk i

// for (var key in obj) {
//     console.log(key);   //edi own methods and prototype members ni loop  chesthadi(enumerable true vunte)
// }



// var myObj = {
//     name: 'satya',
//     age: 30,
//     // play: () => {
//     //     console.log('play');
//     // }
// }

// myObj.play = () => {
//     console.log('go');
// }

// console.log(myObj);

// var objBase = Object.getOwnPropertyDescriptor('myObj', 'name')
// var objBase = Object.getOwnPropertyDescriptor('myObj', 'age')
// var objBase = Object.getOwnPropertyDescriptor('myObj', 'play')


// **** how to create own inheritance: ***

// creating own parent

// function Wood() {

// }
// Wood.prototype.cut = function () {
//     console.log('cut');
// }
// var w = new Wood()

// Chair.prototype = Object.create(Wood.prototype)
// Chair.prototype.constructor = Chair

// Table.prototype = Object.create(Wood.prototype)
// Table.prototype.constructor = Table


// function Chair(name) {
//     this.age = 40
//     Wood.call(this, name)
// }

// Chair.prototype.cut = function () {  //adding cut to Chair base
//     console.log('cut');
// }

// var c = new Chair('kohli')
// console.log(c);
// c.cut()
// console.log(c.name);

// function Table() {

// }
// Table.prototype.cut = function () {
//     console.log('cut');
// }
// var t = new Table()
// console.log(t);
// t.cut()
// console.log(t.name);

function Test() {
    this.play = function () {
        Test.prototype.play.call()
        console.log('own play')
    }
}

Test.prototype.play = () => {
    console.log('proto type');
}
var test1 = new Test()
test1.play()


