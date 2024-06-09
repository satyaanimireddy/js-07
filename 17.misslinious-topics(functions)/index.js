

// IIFE :

// var a=10;
// function test(){}

// (function iife() {
//     var a = 20
//     console.log(a);
//     function test() { }
//     console.log(iife);

// })()

//->separate scope create avvudi ,global variable ni pollute cheyadu,and private ga maintain cheyavachu

// **function currying:
// without
// function sum(a, b, c) {
//     return a + b + c
// }
// console.log(sum(1, 2, 3));

// with function currying:-

// function fun1(a) {
//     return function fun2(b) {
//         return function fun3(c) {
//             return a + b + c
//         }
//     }
// }
// console.log(fun1(1)(2)(3));

// function claDis(price, dis) {
//     return price * dis
// }
// console.log(claDis(1000, .1));
// console.log(claDis(1000, .2));
// console.log(claDis(1000, .3));
// console.log(claDis(1000, .4));

// ->price ni multiple times send cheyakunda avoid cheyadaniki below function:
// function calPrice(price) {
//     return function calDis(dis) {
//         return price * dis
//     }
// }
// var calDis = calPrice(1000)
// console.log(calDis(.1));
// console.log(calDis(.2));
// console.log(calDis(.3));


// **first class function:
// ->1.function ni variable lo store chese facility,2.function vere function ki argumrnt ga send chese facilty,3.aa function nundi return cheyavachu

// var x=()=>{}
// return function hello(){}
// x(function test(){})

// **higher order function and callback function:-

// ->higher order function ante oka function vere function ni argument ga tesukunna  ,vere function ni return chesina higher order function antaru

// function higherOrderFun(cb) {
//     console.log('higher order function');
//     return function test() { }
//     cb()
// }
// higherOrderFun(function cb() { console.log('callback function'); })


// **pure vs impure:

// function pure(a, b, c) {
//     return a + b + c
// }
// console.log(pure(1, 2, 3));

// function impure(a, b, c) {
//     var d = Math.random() * 100
//     return a + b + c + d
// }
// console.log(impure(1, 2, 3));

// function recursion:

function factorial(n) {
    if (n <= 0) {
        return 1;
    } else {
        return n * factorial(n - 1)
    }
}
let result = factorial(5)
console.log(result);