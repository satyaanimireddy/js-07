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


var data
function getData(num, displayData) {
    setTimeout(() => {

        data = num * num
        displayData(data)
    }, 4000)
}
//*** further process data will create callback hell,this is the drawback in callback functions,instead of that we can use promises and async&await
getData(2, function displayData(res1) {
    console.log(res1);
    getData(res1, function displayData(res2) {
        console.log(res2);
        getData(res2, function displayData(res3) {
            console.log(res3);
            getData(res3, function displayData(res4) {
                console.log(res4);
                getData(res4, function displayData(res5) {
                    console.log(res5);
                })
            })
        })

    })
})


