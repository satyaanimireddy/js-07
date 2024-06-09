// console.log('hi');
// console.log('hello');
// console.log('bye');


// console.log('Hi');

// setTimeout(() => {
//     console.log('timer-1');
// }, 2000)

// Promise.resolve().then(() => { console.log('PR-1') }).then(() => { console.log('PR-2') })

// console.log('Bye');

// setTimeout(() => {
//     console.log('timer-2');
// }, 0)


// async:

// var data
// function getData() {
//     setTimeout(() => {
//         data = [
//             { pName: 'laptop', pPrice: 4500 },
//             { pName: 'mobile', pPrice: 2000 },
//             { pName: 'tv', pPrice: 2000 }
//         ]
//     }, 4000)
// }

// getData()

//syn:

// function displayData(res) {
//     console.log(res);
// }

// displayData()


//we use callback function to convert syn into async:(ES-5)
// var data
// function getData(displayData) {
//     setTimeout(() => {
//         data = [
//             { pName: 'laptop', pPrice: 4500 },
//             { pName: 'mobile', pPrice: 2000 },
//             { pName: 'tv', pPrice: 2000 }
//         ]
//         displayData(data)
//     }, 4000)
// }

// getData(function displayData(res) {
//     console.log(res);
// })


// var data
// function getData(num, displayData) {
//     setTimeout(() => {

//         data = num * num
//         displayData(data)
//     }, 4000)
// }
// //*** further process data will create callback hell,this is the drawback in callback functions,instead of that we can use promises and async&await
// getData(2, function displayData(res1) {
//     console.log(res1);
//     getData(res1, function displayData(res2) {
//         console.log(res2);
//         getData(res2, function displayData(res3) {
//             console.log(res3);
//             getData(res3, function displayData(res4) {
//                 console.log(res4);
//                 getData(res4, function displayData(res5) {
//                     console.log(res5);
//                 })
//             })
//         })

//     })
// })

//** we can handle this problem by using promises or async&await

// promises:

// var x = new Promise(() => { })
// console.log(x);


// function getData() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             var data = [
//                 { pName: 'laptop', pPrice: 4500 },
//                 { pName: 'mobile', pPrice: 2000 },
//                 { pName: 'tv', pPrice: 2000 }
//             ]
//             res(data)
//         }, 2000)
//     })
// }
// console.log(getData());

// function displayData(res) {
//     console.log(res);
// }
// displayData()


// function getData() {
//     var x = new Promise((res, rej) => {
//         setTimeout(() => {
//             var data = [
//                 { pName: 'laptop', pPrice: 4500 },
//                 { pName: 'mobile', pPrice: 2000 },
//                 { pName: 'tv', pPrice: 2000 }
//             ]
//             res(data)
//         }, 2000)
//     })
//     return x
// }
// // getData().then(function displayData(res) {
// //     console.log(res);
// // })

// // or
// getData().then((res) => {
//     console.log(res);
// })


// further process
// function getData(num) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             // var data = [
//             //     { pName: 'laptop', pPrice: 4500 },
//             //     { pName: 'mobile', pPrice: 2000 },
//             //     { pName: 'tv', pPrice: 2000 }
//             // ]
//             var data = num + num
//             res(data)
//         }, 2000)
//     })
// }
// getData(2).then((res1) => {
//     console.log(res1);
//     return getData(res1)
// }).then((res2) => {
//     console.log(res2);
//     return getData(res2)
// }).then((res3) => {
//     console.log(res3);
//     return getData(res3)
// }).then((res4) => {
//     console.log(res4);
//     return getData(res4)
// }).then((res5) => {
//     console.log(res5);
//     return getData(res5)
// })

// ***async await
// var data
// function getData() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             data = [
//                 { pName: 'laptop', pPrice: 4500 },
//                 { pName: 'mobile', pPrice: 2000 },
//                 { pName: 'tv', pPrice: 2000 }
//             ]
//             res(data)
//         }, 4000)
//     })
// }

// async function displayData() {
//     var res = await getData()
//     console.log(res);
// }
// displayData()

// ***further process
// var data
// function getData(num) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {

//             data = num + num
//             res(data)
//         }, 2000)
//     })
// }

// async function displayData() {
//     var res1 = await getData(2)
//     console.log(res1);
//     var res2 = await getData(res1)
//     console.log(res2);
//     var res3 = await getData(res2)
//     console.log(res3);
//     var res4 = await getData(res3)
//     console.log(res4);
//     var res5 = await getData(res4)
//     console.log(res5);

// }
// displayData()