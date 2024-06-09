import arr from "./module2.js"

var y = 100

var obj2 = { name: 'kohli', age: 35 }

var test2 = () => {
    console.log('test2');
}
export default test2  // default export 
export { y, obj2 }  //single line lo all named exports

console.log(arr);