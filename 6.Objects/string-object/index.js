
// var msg = ' hi how are you '
var msg = 'hi how are you'


console.log(msg)
//length

// console.log(msg.length)

// trim 

// console.log(msg.trim().length)

// console.log(msg.trimStart().length)
// console.log(msg.trimEnd().length)

//slice
// console.log(msg.slice())
// console.log(msg.slice(0))
// console.log(msg.slice(3))
// console.log(msg.slice(3, 7))
// console.log(msg.slice(-5))

// substring

// console.log(msg.substring())
// console.log(msg.substring(0))
// console.log(msg.substring(2))
// console.log(msg.substring(2, 6))
// console.log(msg.substring(-3))  // it will not work for negative numbers
// console.log(msg.substring(-0, 4))


// substr

// console.log(msg.substr())
// console.log(msg.substr(0))
// console.log(msg.substr(2))
// console.log(msg.substr(0, 6))
// console.log(msg.substr(3))

//charAt
var msg = 'Hi how are you'


// console.log(msg.charAt())
// console.log(msg.charAt(0))
console.log(msg.charAt(4))

//charCodeAt(it will gives the ascii code)

// console.log(msg.charCodeAt(0))// 
// console.log(msg.charCodeAt(3))

// replace

var msg = 'Hi how are you bye you'

console.log(msg.replace('you', 'sachin'))
console.log(msg)  // it gives the original sting not modified string because of it is a primitive datatype

//toLowercase

// console.log(msg.toLowerCase())

//toUppercase

// console.log(msg.toUpperCase())

//concat:

console.log(msg.concat(' hello', "hiiiiii"))

// **padStart

// var message = 'hi'

// console.log(message.padStart(6, 4))
// console.log(message.padEnd(6, 4))
// console.log(message.padEnd(6, 10))

// **split
// var arr = msg.split()
// // var arr = msg.split('')
// // var arr = msg.split(' ')

// console.log(arr)

// **indexOf

// console.log(msg.indexOf('y'))
// console.log(msg.indexOf('kohli'))

// **lastindexOf

// console.log(msg.lastIndexOf('y'))
// console.log(msg.lastIndexOf('kohli'))

// includes


// console.log(msg.includes('you'))
// console.log(msg.includes('kohli'))

// **startsWith

// console.log(msg.startsWith('Hi'))
// console.log(msg.startsWith('you'))

// **endswith

// console.log(msg.endsWith('you'))
// console.log(msg.endsWith('kohli'))