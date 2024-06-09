
var getAllData = document.getElementById('get-alldata')

function getAllDataFun() {
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
        console.log(res)
        return res.json()
    }).then((data) => {
        console.log(data);
    })
}

// or

// async function getAllDataFun() {
//     var res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     var data = await res.json()
//     console.log(data);
// }

getAllData.addEventListener('click', getAllDataFun)

// get single item***

var singleData = document.getElementById('get-singledata')
function singleDataFun() {
    fetch('https://jsonplaceholder.typicode.com/posts/5').then((res) => {
        console.log(res);
        return res.json()
    }).then((data) => {
        console.log(data);
    })
}
singleData.addEventListener('click', singleDataFun)

//how to send data to db**

var sendData = document.getElementById('send-data')

var newObj = {
    userId: 11,
    title: 'hello ap',
    body: "hello everyone"
}
// console.log(newObj);
// var objJson = JSON.stringify(newObj)
// console.log(objJson);
// var jsObj=JSON.parse(objJson)
// console.log(jsObj);
function sendDataFun() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newObj)

    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })

}
sendData.addEventListener('click', sendDataFun)

// update data***
updateDataBtn = document.getElementById('update-data')
function updateDataFun() {
    fetch('https://jsonplaceholder.typicode.com/posts/3', {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newObj)
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
}
updateDataBtn.addEventListener('click', updateDataFun)

// how t delete db item**

deleteItem = document.getElementById('delete-data')
function deleteItemFun() {
    fetch('https://jsonplaceholder.typicode.com/posts/2', {
        method: 'delete'
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
}
deleteItem.addEventListener('click', deleteItemFun)