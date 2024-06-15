

// local storage :

// how to store data in local storage;



// const handler = () => {
//     window.localStorage.setItem("name", "kohli")
//     window.localStorage.setItem("age", "30")

// }
// var button = document.createElement('button')
// button.innerHTML = "click"

// button.addEventListener('click', handler)
// console.log(button);

// var body = document.getElementById('body')
// console.log(body);
// body.appendChild(button)

// set item:

var lBtn = document.getElementById('lstore')
// console.log(lBtn);

var lstorageFun = () => {
    window.localStorage.setItem('name', "kohli")
    window.localStorage.setItem('age', "35")
}
lBtn.addEventListener('click', lstorageFun)

var sBtn = document.getElementById('sstore')

var sstoreFun = () => {
    sessionStorage.setItem("name", "satya")
    sessionStorage.setItem("age", "30")
}
sBtn.addEventListener('click', sstoreFun)

// // access 

var lstoreBtn = document.getElementById('lstorea')
var lstoreBtnFun = () => {
    console.log(localStorage.getItem('name'));
    console.log(localStorage.getItem('age'));
}
lstoreBtn.addEventListener('click', lstoreBtnFun)


var sstoreBtn = document.getElementById('sstorea')

var sstoreBtnFun = () => {
    console.log(sessionStorage.getItem('name'));
    console.log(sessionStorage.getItem('age'));
}
sstoreBtn.addEventListener('click', sstoreBtnFun)

// // //how to delete local storage items

var lstoreBtnDelete = document.getElementById('lstoreDelete')
var lstoreDeleteFun = () => {
    localStorage.removeItem('name')
}
lstoreBtnDelete.addEventListener('click', lstoreDeleteFun)

// // // how to delete session storage

var sstoreBtnDelete = document.getElementById('sstoreDelete')
var sstoreDeleteFun = () => {
    sessionStorage.removeItem('name')
}
sstoreBtnDelete.addEventListener('click', sstoreDeleteFun)


// // // how delete all items in local storage

var lstoreBtnAllDelete = document.getElementById('lstoreAllDelete')
var lstoreAllDeleteFun = () => {
    localStorage.clear()
}
lstoreBtnAllDelete.addEventListener('click', lstoreAllDeleteFun)


//  // // how delete all items in session storage

var sstoreBtnAllDelete = document.getElementById('sstoreAllDelete')
var sstoreAllDeleteFun = () => {
    sessionStorage.clear()
}
sstoreBtnAllDelete.addEventListener('click', sstoreAllDeleteFun)
