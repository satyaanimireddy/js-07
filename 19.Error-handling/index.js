

// Type of errors:


// var obj = {
//     name="satya"
// }

// console.log(obj);  //syntax

// reference error:

// console.log(x); // x is not defined
// function test() {
//     console.log(x);  //undefined
//     var x = 10
//     console.log(x);  //10
// }
// test()
// console.log(x);  // x is not defined


// console.log(x); // x is not defined
// function test() {
//     console.log(x);  // x is not defined
//     x = 10  //here it doesn't create memory,so we can access any scope below of this
//     console.log(x);  //10
// }
// test()
// console.log(x);  //  10


// **type error

// var x = 100
// // console.log(Math.max(x));  //100

// x.push(20)
// console.log(x);  // type error: x.push is not function


// ***  Error Handling (or) Exception Handling  ***


// --------
// console.log(test);  // f test(){}
// console.log(test());  //undefined, function lo em ledhu kabattti undefined ,emina return chesthe adi print avvudi
// function test() { }
// test()

// ------

// console.log(test);  // f test(){}
// // console.log(test());  //100
// function test() {
//     console.log(100);
// }
// console.log(test());  //100

// -------
// ->console anedi print cheyyadaniki :


// console.log([]);   //[]
// console.log({});  //{}
// console.log("hello");  //hello
// console.log(100);  //100
// // console.log(hello);  // ****  Reference error: hello is not defined   *****
// console.log([{}]);  //[{}]
// console.log([{ "name": "satya" }]);  //[{"name":"satya"}]
// console.log(undefined);  //undefined
// console.log(null);  //null
// console.log(true);  //true
// console.log(false); //false
// console.log(Set); //ƒ Set() { [native code] }
// console.log(Map);  //ƒ Map() { [native code] }
// console.log(WeakSet);  //ƒ WeakSet() { [native code] }
// console.log(WeakMap); // ƒ WeakMap() { [native code] }



// **** try catch ****

// console.log('hi');
// try {

//     console.log(hello);
// } catch (err) {
//     console.log(err);
// }
// finally {   //we finally for 
//     console.log('finally');
//     console.log('bye');
// }
// console.log('bye');
// console.log('bye');
// console.log('bye');
// console.log('bye');


var age = 10

if (age < 18) {
    throw ('age must be 18 and above to have vote')   //custom error  creation
}
else {
    console.log('having vote right');
}

console.log("vvvb");