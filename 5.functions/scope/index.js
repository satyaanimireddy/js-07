// storing in global
var a = 1
let b = 2
const c = 3

// access in global

console.log(a)
console.log(b)
console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)

function test() {
    // storing in functional
    console.log(a) //undefined (even a is declared in global scope it will give preference to local variable)
    var a = 100
    console.log(a) //100
    var d = 4
    let e = 5
    const f = 6

    // access in functional
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)
    console.log(f)

    if (true) {
        //storing in block
        var g = 7
        let h = 8
        const i = 9
        // access in block
        console.log(a)
        console.log(b)
        console.log(c)
        console.log(d)
        console.log(e)
        console.log(f)
        console.log(g)
        console.log(h)
        console.log(i)
    }
}
test()

