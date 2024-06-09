var pr1 = new Promise((res, rej) => {
    setTimeout(() => {
        res('pr1')
    }, 4000)
})

var pr2 = new Promise((res, rej) => {
    setTimeout(() => {
        res('pr2')
    }, 2000)
})

var pr3 = new Promise((res, rej) => {
    setTimeout(() => {
        res('pr3')
    }, 1000)
})

// race**

Promise.race([pr1, pr2, pr3]).then((res) => console.log(res))

// all**

Promise.all([pr1, pr2, pr3]).then((res) => { console.log(res); })  //edi reject ayithe akkade print chesthadi,anni success ayithe ani oka array lo return chesthadi

// promise.allSettled***

Promise.allSettled([pr1, pr2, pr3]).then((res) => { console.log(res); }) //edi anni settle ayyevaraku wait chesi rendu istundi

// **