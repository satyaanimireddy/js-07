// regular function

// function test() {
//     return 100  //one value ni return chesthundi,
//     return 200
// }
// console.log(test());

// function* genFun() {
//     // return 100
//     yield 100  //yield value ni return chesthundi and pause chesthundi ,malli start avvali ante next method call chesthe resume avvudhi
//     yield 200
//     yield 300
// }
// var genObj = genFun()
// console.log(genObj.next());  //next method call chesthe execution start avvutdi
// console.log(genObj.next());  //next method call chesthe execution start avvutdi
// console.log(genObj.return());  //return ni call chesthe execution stop avvudi
// console.log(genObj.next());  //next method call chesthe execution start avvutdi


// function* genFun() {
//     try {
//         yield 100  //yield value ni return chesthundi and pause chesthundi ,malli start avvali ante next method call chesthe resume avvudhi
//     } finally {  //finally anedi return valla stop ayyina execution ,finally block lo unte stop cheyyaledhu
//         yield 200
//         yield 300
//     }
// }
// var genObj = genFun()
// console.log(genObj.next());  //next method call chesthe execution start avvutdi
// console.log(genObj.return());  //return ni call chesthe execution stop avvudi,kani pina finally use cheyadam tho edi execution ni stop cheyaledhu
// console.log(genObj.next());  //next method call chesthe execution start avvutdi
// console.log(genObj.next());  //next method call chesthe execution start avvutdi

// practice:-


// function* test() {
//     try {
//         yield 100
//     } finally {
//         yield 200
//         yield 300
//     }
// }
// let x = test()
// console.log(x.next());
// console.log(x.return());
// console.log(x.next());
// console.log(x.next());