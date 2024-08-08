// weak map accepts as keys only objects
//map allows any data type as keys

// var mymap = new Map()

// var obj = {
//     name: 'satya',
//     age: 30
// }


// mymap.set('name', 'sachin')
// mymap.set(obj, true)  //key value

// obj = null
// mymap.get(obj)

// console.log(mymap);

// var myweakmap = new WeakMap()

// // myweakmap.set('name', 'kohli')
// myweakmap.set(obj, false)
// myweakmap.delete(obj)

// obj = null
// // myweakmap.get(obj)

// console.log(myweakmap);
// console.log(myweakmap.has(obj));

// array:

// var arr = []

// var obj = { name: 'sachin' }
// var arr = [obj]
// obj = null
// console.log(arr);