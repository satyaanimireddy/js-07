// var arr = [1, 2, 3, 4, 5]
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

// console.log(arr)

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
// var arr1 = [1, 2, 3, 4, 5]
// var arr2 = arr1
// console.log(arr1)
// console.log(arr2)

// length:
// arr1.length = 0

// arr1 = []  // it will not work for coppied senario(arr2=arr1)
// arr1.splice(0, arr1.length)
// arr1.splice(0)

// var arr3 = [...arr1]

// console.log(arr1)
// console.log(arr2)
// console.log(arr3)

// 5.how to find items in array:

// var arr = [1, 2, 3, 4, 5, 2]

//primitives:

// console.log(arr.indexOf(2))
// console.log(arr.indexOf(20))
// console.log(arr.lastIndexOf(2))
// console.log(arr.lastIndexOf(20))
// console.log(arr.includes(2))
// console.log(arr.includes(20))

// reference data types :

// var arr = [{ course: 'react' }, { course: 'nodejs' }]

// console.log(arr.indexOf({ course: 'react' }))  //not work
// console.log(arr.lastIndexOf({ course: 'nodejs' })) //not work
// console.log(arr.includes({ course: 'nodejs' })) //not work

// var findValue = arr.find((obj) => {
//     return obj.course === 'react'
// })
// console.log(findValue)

// var findIndex = arr.findIndex((obj) => {
//     return obj.course === 'react'
// })
// console.log(findIndex)

// 6.how iterate array:

// var arr = [1, 2, 3, 4, 5]

// without using loop:
// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

// for of :

// for (var value of arr) {
//     console.log('for of ', value)
// }

//for in

// for (var key in arr) {
//     console.log('for in ', key)
// }

// for each:

// var value = arr.forEach((v, i) => {
//     console.log(v, i)

// })
// console.log(value)

// 7.how to copy/clone array:

// var originalArr = ['sachin', { road: 101 }, () => { }]


// var coppiedArr = originalArr  //normal copy
// var coppiedArr = JSON.parse(JSON.stringify(originalArr))  //deep copy

// var coppiedArr = Object.assign([], originalArr)  //shallow copy

// var coppiedArr = originalArr.slice()  //shallow copy
// var coppiedArr = [...originalArr]  //shallow copy(es-6)


// coppiedArr[0] = 'kohli'
// coppiedArr[1].road = 65
// coppiedArr[1] = 201

// console.log(originalArr)
// console.log(coppiedArr)

// ****example
// const originalArray = [1, 2, 3, 4, 5];
// const shallowCopy = Object.assign([], originalArray)   //ES-5 (or)
// // const shallowCopy = [...originalArray];   //ES-6  (or)
// // const shallowCopy = originalArray.slice(0);    //ES-6

// shallowCopy[0] = 6
// shallowCopy[2] = 10

// console.log(originalArray)
// console.log(shallowCopy)


// *** Both of these methods create a new array that contains the same elements as the original array.
//   However, keep in mind that the elements themselves are still references to the same objects. If the array
//   contains objects or arrays, changes made to those objects or arrays will be reflected in both the original
//   array and the shallow copy.***

// const originalArray = [{ value: 1 }, { value: 2 }, { value: 3 }];
// // const shallowCopy = originalArray.slice();
// const shallowCopy = [...originalArray]

// shallowCopy[0].value = 100;

// console.log(originalArray)
// console.log(shallowCopy)

// console.log(originalArray[0].value);  // Output: 100
// console.log(shallowCopy[0].value);     // Output: 100


// 8.how to merge of array into one array:

// var arr1 = [1, 2, 3, 4, 5]
// var arr2 = [6, 7, 8, 9, 10]
// var arr3 = [11, 12, 13, 14, 15]

// console.log(arr1)
// console.log(arr2)

// Es-5:
// var mergedArr1 = arr1.concat(arr2, arr3)
// var mergedArr2 = arr2.concat(arr1, arr3)

// console.log(mergedArr1)
// console.log(mergedArr2)

// ES-6:

// var mergedArr1 = [...arr1, ...arr2, ...arr3]

// console.log(mergedArr1)


// 9.testing of array items

// var arr = [1, 2, 3, 4, 5, 6]
// // var arr = [-1, -2, -3, -4, -5, -6]

// var someResult = arr.some((value) => {
//     return value >= 6
// })
// console.log(someResult)

// var everyResult = arr.every((value) => {
//     return value >= 5
// })
// console.log(everyResult)

// filter:

// var arr = [1, 2, 3, 4, 5]

// var filteredArr = arr.filter((value) => {
//     return value > 2
// })
// console.log(filteredArr)

//map:

// var mappedItems = arr.map((value) => {
//     return value * 100
// })
// console.log(mappedItems)


//map vs  forEach:

// var forEachValue = arr.forEach((value) => {
//     // return value * 100  //undefined
//     console.log(value)
// })
// console.log(forEachValue)

// var arr = [1, 2, 3, 4, 5]

// reduceValue = arr.reduce((cum, cur) => {
//     console.log(cum, cur)
//     return cum + cur
// }, 0)

// console.log(reduceValue)


// flattening array:

// var arr = [1, 2, [100, 200, [300, 400, [500, 600]]]]

//flat:

// var singleArr = arr.flat(3)
// var singleArr = arr.flat(Infinity)

// console.log(singleArr)

//Array.isArray:

// var singleArr = []
// function flattenFn(a) {
//     console.log(a)
//     for (var value of a) {
//         console.log(value)
//         if (Array.isArray(value)) {
//             flattenFn(value)

//         } else {
//             singleArr.push(value)
//         }
//     }
// }
// flattenFn(arr)

// console.log(singleArr)

// =>**how to remove duplicates in array

// var arr = [1, 2, 3, 2, 4, 2, 5]

// Set with spread:

// var uniqueArr = [...new Set(arr)]
// console.log(uniqueArr)

// or

// var uniqueArr = []
// function removeDuplicate(a) {
//     console.log(a)
//     for (var value of a) {
//         console.log(value)
//         if (uniqueArr.indexOf(value) === -1) {
//             uniqueArr.push(value)
//         }
//     }

// }
// removeDuplicate(arr)

// console.log(uniqueArr)

//****Join method:

// var arr = [1, 2, 3, 4, 5]

// console.log(arr, typeof arr)
// console.log(Array.isArray(arr))

// var joinResult = arr.join()
// console.log(joinResult, typeof joinResult)

// var joinResult = 'hello how are you'
// var splitResult = joinResult.split(' ')
// console.log(splitResult)

//***sorting**

// var arr = [1, 5, 2, 3, 8, 4]

//single value
// console.log(arr.sort()) //assending
// console.log(arr.reverse()) //decending

// double value:

// var arr = [2, 5, 3, 20, 6, 8, 12]  //double value vunte direct sort method work avvadhu ,we can comparision function or nested loop

// console.log(arr.sort()) //assending not works
// console.log(arr.reverse()) //decending not works

// var asValue = arr.sort((a, b) => {
//     if (a > b) {  //assending
//         // if (a < b) {  //decending
//         return 1
//     }
//     else {
//         return -1
//     }

//     //     //( or)

//     // return b - a  //decending
//     //     // return a - b  // asending
// })

// console.log(asValue)

// var arr = [{ course: 'react' }, { course: 'html' }, { course: 'css' }]

// var asValue = arr.sort((a, b) => {
//     if (a.course > b.course) {
//         return 1
//     }
//     if (a.course < b.course) {
//         return -1
//     }
// })

// console.log(asValue)

// **nested loop

// for (var i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//         if (arr[i].course > arr[j].course) {
//             var temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//     }
// }
// console.log(arr)

//at :

// var arr = [1, 2, 3, 4, 5]

// var result = arr.at(2)
// console.log(result)

//**fill ***
// arr.fill('hi')

// console.log(arr)

// **array.from

// var str = 'hello'
// var obj = {
//     length: 1
// }
// console.log(str)
// console.log(obj)
// var result = Array.from(str)  //it will convert into array

// var result = Array.from(obj) //it will convert into array
var result = Array.from(obj, (v, i) => {
    return i  //it will give index numbers,v isthe undefined
})  //it will
console.log(result)

// function test() {
//     console.log(arguments)

//     var result = Array.from(arguments)
//     console.log(result)
// }
// test(1, 2, 3, 4)

// ****interview questions****

// 1.how to convert first letter into capital:

// var str = 'satya'

// var x = str.charAt(0)  //it will convert first letter into capital
// var y = x.toUpperCase()
// console.log(y)
// var result = y + str.slice(1)//or
// var result = y.concat(str.slice(1))
// console.log(result)

// or

// var x = str.charAt(0).toUpperCase().concat(str.slice(1))
// console.log(x)

// 2.how to convert first  letter of the each word into capital letter

// var str = 'sachin kohli gill rahul'
// var arr = str.split(' ')  //it will convert string into array
// console.log(arr)
// var res = arr.map((word) => {
//     return word.charAt(0).toUpperCase().concat(word.slice(1))
// })

// var result = res.join(' ')

// console.log(result)


// 3.how to repeat a string for a specified number of times ?

// var str = 'javascript'

// var res = str.repeat(5)  // it will repeat specified number
// console.log(res)

// or

// function test(a, num) {
//     if (num > 0) {
//         var res = str.repeat(num)
//         console.log(res)
//     }
// }
// test(str, 2)

// 4.how to reverse a given string ?

// var str = 'javascript'

// var res = str.split('').reverse().join('')

// or

// var res = Array.from(str).reverse().join('')

// console.log(res)

// 5.how to find given string is palindrome or not ??

// var str = 'racecar'

// var reverse = str.split('').reverse().join('')
// console.log(reverse)


// function test(str) {
//     // console.log(str)
//     var reverse = str.split('').reverse().join('')
//     return (str === reverse)
//     // console.log(reverse)


// }
// // test(str)
// console.log('hello')
// console.log('racecar')

// 6.how to count  vowels ?

// var str = 'hello'

// function findVowels(str) {
//     var vowels = 'aeiouAEIOU'
//     var count = 0
//     for (var char of str) {
//         if (vowels.includes(char)) {
//             count++
//         }
//     }
//     return count
// }
// console.log(findVowels(str))

// 7.how to find longest word in a given string

// var str = 'Hi how are you sachin'

// function findLongestWord(str) {
//     var longest = ''
//     var words = str.split(' ')
//     // console.log(words)
//     for (var word of words) {
//         if (word.length > longest.length) {
//             longest = word
//         }
//     }
//     // return word
//     return longest

// }
// console.log(findLongestWord(str))