var arr = [1, 2, 3, 4, 5]
//how to access

// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])


// for (var value of arr) {
//     console.log(value)
// }

//2.how to add new items to array

// startting:
// arr.unshift(0)

//ending:
// arr.push(6)

// anywhwre:

// arr.splice(0, 0, 'hi')//starting 
// arr.splice(arr.length, 0, 'bye')//ending
// arr.splice(2, 0, 'one')
// console.log(arr)
// arr.splice(arr.length - 1, 0, 'one')

console.log(arr)

// 3.how to remove
// starting
// arr.shift()
// ending
// arr.pop()

// anywhere
// arr.splice(0, 1) //starting
// arr.splice(arr.length - 1, 1) //ending

// arr.splice(2, 1)
// arr.splice(2, 2)
// arr.splice(2, 3)

// console.log(arr)

// 4.how to remove all items
var arr1 = [1, 2, 3, 4, 5]
var arr2 = arr1
console.log(arr1)
console.log(arr2)

// length:
// arr1.length = 0

// arr1 = []  // it will not work for coppied senario(arr2=arr1)
// arr1.splice(0, arr1.length)
// arr1.splice(0)

// var arr3 = [...arr1]

console.log(arr1)
console.log(arr2)
// console.log(arr3)


