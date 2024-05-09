
// var marks = 35

//if-else:

// if (marks < 35) {
//     console.log('failed')
// } else if (marks >= 35 && marks < 60) {
//     console.log('second class')
// } else if (marks >= 60 && marks < 75) {
//     console.log('first class')
// } else {
//     console.log('distinction')
// }

//switch:(it will not work for step values)
// below code is not work
// switch (marks) {
//     case marks < 35:
//         console.log('failed')
//         break;
//     case marks >= 35 && marks < 60:
//         console.log('second class')
//         break;
//     case marks >= 60 && marks < 75:
//         console.log('first class')
//         break;
//     default:
//         console.log('distinction')

// }

// var num = 60

//if-else

// if (num > 0) {
//     console.log('positive number')
// } else if (num < 0) {
//     console.log('negative number')
// } else {
//     console.log('zero')
// }

// switch case :(it will not work for step values)

//below code is based on step value ,so it will not work 
// switch (num) {
//     case num > 0:
//         console.log('positive number')
//         break;
//     case num < 0:
//         console.log('negative number')
//         break;
//     default:
//         console.log('zero')
// }


// var dayOfWeek = 2

// if (dayOfWeek === 1) {
//     console.log('Monday')
// } else if (dayOfWeek === 2) {
//     console.log('Tuesday')

// } else if (dayOfWeek === 3) {
//     console.log('Wed')
// } else if (dayOfWeek === 4) {
//     console.log('Thursday')
// } else if (dayOfWeek === 5) {
//     console.log('Friday')
// } else if (dayOfWeek === 6) {
//     console.log('Saturday')
// } else if (dayOfWeek === 7) {
//     console.log('Sunday')
// }
// else {
//     console.log('No day')
// }


//switch (it is not a step value so, it will work):

// switch (dayOfWeek) {
//     case 1:
//         console.log('Monday')
//         break;
//     case 2:
//         console.log('Tuesday')
//         break;
//     case 3:
//         console.log('Wednensday')
//         break;
//     case 4:
//         console.log('Thursday')
//         break;
//     case 5:
//         console.log('Friday')
//         break;
//     case 6:
//         console.log('Saturday')
//         break;
//     default: console.log('Sunday')
// }

var customer = 'Silver'

// if-else
// (here it is a case-sensitive)

// if (customer === 'Gold') {
//     console.log('Gold customer')
// } else if (customer === 'Silver') {
//     console.log('Silver customer')
// } else if (customer === 'Iron') {
//     console.log('Iron customer')
// } else {
//     'Unknown customer'
// }

switch (customer) {
    case 'Gold':
        console.log('Gold customer')
        break;
    case 'Silver':
        console.log('Silver customer')
        break;
    case 'Iron':
        console.log('Iron customer')
        break;
    default:
        console.log('unknown customer')
}