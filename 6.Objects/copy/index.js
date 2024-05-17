// primitives(all primitives do deep copy)

// var x = 10
// var y = x

// console.log(x)
// console.log(y)
// y = 20
// console.log(x)
// console.log(y)

// Object copy

var originalObj = {
    name: 'sachin',
    address: { road: 101 },
    play: () => {
        console.log('play')
    }
}

// console.log(originalObj)

// normal copy 

// var copiedObj = originalObj //normal copy

//deep copy:

// var copiedObj = JSON.parse(JSON.stringify(originalObj))  //deep copy (this method couldn't copy method)

// import lodash from 'lodash'
// var lodash = require('lodash')  // we have to run this by using nodejs

// var copiedObj = lodash.cloneDeep(originalObj) // it will copy method too


// shallow copy:

// var copiedObj = Object.assign({}, originalObj)  //ES-5 shallow copy
var copiedObj = { ...originalObj }  //ES-6 shallow copy

// console.log(originalObj)
// console.log(copiedObj)

copiedObj.name = 'kohli'
copiedObj.address.road = 201

console.log(originalObj)
console.log(copiedObj)

