// how to create 

// var arr = []

// var mySet = new Set()

// console.log(arr);
// console.log(mySet);

// // how to initialize

// var arr = [1, 2, 3, 3, 2]
// console.log(arr);

// var mySet = new Set([1, 2, 3, 3, 2]) //it wil store unique values only

// console.log(mySet);

// how to add new items

// var arr = []

// arr.push(1)
// arr.push(2)
// arr.push(3)
// arr.push(4)
// console.log(arr);

// var mySet = new Set()

// mySet.add(1)
// mySet.add(2)
// mySet.add(3)
// mySet.add(3)
// console.log(mySet);

//how access

// var arr = [1, 2, 3, 4]

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// var mySet = new Set([1, 2, 3, 4, 3])
// console.log(mySet);
// var myArray = [...mySet]  // converting set into array for accessing set 
// console.log(myArray);


// how to find specific value

// var arr = [1, 2, 3, 4]

// console.log(arr.indexOf(5) > -1);
// console.log(arr.includes(5));

// var mySet = new Set([1, 2, 3])

// console.log(mySet.has(2));


// how to delete specific value

// var arr = [1, 2, 3, 4]

// arr.splice(1, 1)
// console.log(arr);

// var mySet = new Set([1, 2, 3])

// mySet.delete(2)
// console.log(mySet);

// how to find length of items

// var arr = [1, 2, 3]
// console.log(arr.length);

// var mySet = new Set([1, 2, 3])
// console.log(mySet.size);

// how to remove all item

// var arr = [1, 2, 3]

// arr.length = 0
// arr = []

// arr.splice(0, arr.length)

// console.log(arr);

// var mySet = new Set([1, 2, 3])

// mySet.clear()
// console.log(mySet);


// how to loop

var arr = [1, 2, 3]

// for (var value of arr) {
//     console.log(value);
// }

// for (var key in arr) {
//     console.log(key, arr[key]);
// }

// arr.forEach((v, i) => {
//     console.log(v, i);
// })

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// var x = arr.map((v) => {
//     // console.log(v);  //it will give each value 
//     return v
// })
// console.log(x);  // [1,2,3]  //new array ni return chesi values add ayyi new array vastundi


// var myMap = new Map()
// console.log(myMap);

mySet = new Set([1, 2, 3])
console.log(mySet);

for (var value of mySet) {
    console.log(value);
}