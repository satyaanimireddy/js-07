

// function test() {
//     var x = 100
//     return x
// }
// console.log(test())

function outer() {
    var x = 'sachin'
    // return x
    function inner() {
        var y = 'kohli'
        console.log(x)
        console.log(y)
    }
    inner()
    // return inner
}
// console.log(outer())
outer()
// var inner = outer()
// inner()

