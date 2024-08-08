
//->we can use Map data structure to create object
//how to create

// var obj = {
// }
// console.log(obj);

// var myMap = new Map()
// console.log(myMap);


// how to initialize;

// var obj = {
//     name: "sachin",
//     age: 40
// }
// console.log(obj);

// var myMap = new Map([['name', 'sachin'], ['age', 40]])
// console.log(myMap);

//how add properties:

// var obj = {}
// obj.name = 'sachin'
// obj.age = 40
// obj['color'] = 'red'
// obj['height'] = 5

// console.log(obj);


// var myMap = new Map()

// myMap.set('name', 'sachin')
// myMap.set('age', 40)

// console.log(myMap);

// how to access/read properties :

// var obj = {
//     name: "sachin",
//     age: 40
// }

// console.log(obj.name);
// console.log(obj.age);
// // or
// console.log(obj['name']);
// console.log(obj['age']);

// var myMap = new Map()
// // //adding
// myMap.set('name', 'sachin')
// myMap.set('age', 40)

// // //access
// console.log(myMap.get('name'));
// console.log(myMap.get('age'));
// console.log(myMap);

//**keys */

// keys anedi obj lo string or symbol data type vundali(it will accept all primitives)
// onj lo key ga only primitives,symbol ni accept chesthadi
// var obj = {
//     name: 'sachin',
//     10: '10',
//     true: 'true',
//     undefined: 'undefined',
//     null: 'null',
//     [Symbol('symbolkey')]: Symbol('symbolValue')
// }

// console.log(obj);

// for (var key in obj) {
//     console.log(key, typeof [key]);
// }

//Map data structure lo  any data type ni key ga pass cheyaavacchu

// var myMap = new Map()
// // console.log(myMap);
// myMap.set('name', 'sachin')
// myMap.set(10, '10')
// myMap.set(true, 'true')
// myMap.set(undefined, 'undefined')
// myMap.set(null, 'null')
// myMap.set({}, 'sachin')
// myMap.set([], 'sachin')
// myMap.set(() => { }, 'sachin')
// console.log(myMap);

// for (var key of myMap) {
//     console.log(key, typeof (key));
// }

// console.log(typeof (myMap.get(name)));
// console.log(typeof (myMap.get(10)));
// console.log(typeof (myMap.get(true)));

// for (var key of myMap.keys()) {
//     console.log(key, typeof [key]);
// }

// var keys = Object.keys(myMap.get())
// console.log(keys);

//*** how to check specific key is there or not ****

// var obj = {
//     name: 'sachin',
//     age: 40
// }

// console.log('name' in obj);
// console.log('age' in obj);
// console.log('color' in obj);
// // or

// console.log(obj.hasOwnProperty('name'));
// console.log(obj.hasOwnProperty('age'));
// console.log(obj.hasOwnProperty('color'));



// var myMap = new Map()

// myMap.set('name', 'sachin')
// myMap.set('age', 40)

// console.log(myMap);

// console.log(myMap.has('name'));
// console.log(myMap.has('age'));
// console.log(myMap.has('color'));

//*** how to find length */

// console.log(myMap.size);  //2


// var myobj = Object.keys(obj)  //it will convert object into array,then we can find length of object(object has no length property)
// console.log(myobj.length);

// ** how to delete specific key

// var obj = {
//     name: 'sachin',
//     age: 40
// }
// console.log(obj);

// delete obj.name
// delete obj.age
// console.log(obj);


// var myMap = new Map()
// myMap.set('name', 'sachin')
// myMap.set('age', 40)

// console.log(myMap);

// myMap.delete('name')
// myMap.delete('age')

// console.log(myMap);

// ** how delete all keys at time
//delete obj

// obj = {}

// or

// for (var key in obj) {
//     delete obj[key]
// }
// console.log(obj);


// // myMap delete
// console.log(myMap);

// myMap.clear()

// console.log(myMap);

// **** how to loop keys

// var obj = {
//     name: 'sachin',
//     age: 40
// }
// console.log(obj);

// for (var key in obj) {
//     console.log(key);
//     console.log(obj[key]);
// }


// var myMap = new Map()
// myMap.set('name', 'sachin')
// myMap.set('age', 40)

// console.log(myMap);

// console.log(myMap.keys());
// console.log(myMap.values());
// console.log(myMap.entries());

// for (var value of myMap) {
//     console.log(value);
// }

// *** how to convert object into Map data structure:


// var newMap = new Map(Object.entries(obj))

// console.log(newMap);

// var newobj = Object.fromEntries(newMap)

// console.log(newobj);


// how to destructuring
// var { name, age } = obj

// console.log(name);
// console.log(age);

// iterable data structure ni destructure cheyalante [ ]

// var myMap = new Map()
// myMap.set('name1', 'sachin')
// myMap.set('age', 40)


// console.log(myMap.get('name1'));
// console.log(myMap.get('age'));

// var [v1, v2] = myMap  //destructuring

// console.log(v1);
// console.log(v2);

// var [key, value] = v1
// var [key, value] = v2

// console.log(value);
// console.log(value);


