//how to examin dom:
// console.log(document) //it will gives total html file
// console.dir(document) //it will give all dom elements in browser

//how to read dom properties:
// console.dir(document.title)
// console.dir(document.doctype)
// console.dir(document.domain)
// console.dir(document.URL)
// console.dir(document.all)
// console.dir(document.links)
// console.dir(document.forms)
// console.dir(document.images)

//***how to select dom element into js file:

// **id

// var element = document.getElementById('myid-1')
// var para2 = document.getElementById('myid-2')

// element.style.background = 'red'
// element.style.color = 'white'
// element.style.fontSize = '30px'

// element.innerText = 'element updated'

// console.log(element)
// console.log(para2)

// ***class

// var element = document.getElementsByClassName('para')

// console.log(element)

// console.log(element[0])
// console.log(element[1])

// element[0].style.background = 'green'
// element[1].style.background = 'yellow'

// console.log(Array.isArray(element))  //false ,it is not an array but,it is iterable data structure ,we can use for of loop for iterate this

// for (var value of element) {
//     console.log(value)
//     value.style.background = 'blue'
// }

// ** tag**

// var element = document.getElementsByTagName('p')
// console.log(element)

// console.log(element[0].style.color = 'red')
// console.log(element[1])

//**query selector *

// var element = document.querySelector('#myid-1')
// var element = document.querySelector('.para')
// var element = document.querySelector('p')

// console.log(element.style.background = 'blue')

//**query selectorAll *

// var element = document.querySelectorAll('#myid-1')
// var element = document.querySelectorAll('.para')
// var element = document.querySelectorAll('p')
// console.log(element)
// console.log(Array.isArray(element))


// *** traversing of Dom: ***

var currentElement = document.getElementById('currentdiv')
console.log(currentElement)

// //* element to parent

var parent = currentElement.parentElement
// parent.style.background = 'blue'
console.log(parent)

// // * element to previous sibling

// var preSibling = currentElement.previousElementSibling

// preSibling.style.color = 'red'
// console.log(preSibling)

// // * element to next sibling

// var nextSibling = currentElement.nextElementSibling
// nextSibling.style.color = 'yellow'
// console.log(preSibling)

// // * element to child

// var firstChild = currentElement.firstElementChild
// var lastChild = currentElement.lastElementChild

// var children = currentElement.children

// firstChild.style.color = 'yellow'
// lastChild.style.color = 'cyan'

// // children[0].style.background = 'yellow'
// // children[1].style.background = 'yellow'

// // or

// for (var value of children) {
//     console.log(value)
//     value.style.background = 'yellow'
// }

// **** how to create and add events ***

// var para = document.createElement('p')

// para.id = 'myid'
// para.className = 'myclass'

// para.innerHTML = 'this is para'
// // // console.log(para)


// // // or

// var paraText = document.createTextNode('this is para')
// console.log(paraText)

// para.appendChild(paraText)

// var body = document.getElementById('body')
// console.log(body)

// // body.appendChild(paraText)

// var h4 = document.createElement('h4')

// console.log(h4)
// h4.id = 'myh4'
// h4.className = 'myh4class'

// // // h4.innerHTML = 'this is heading four'  //or

// var h4Text = document.createTextNode('this is heading four')
// h4.appendChild(h4Text)

// body.appendChild(h4Text)


// ********

// var body = document.getElementById('body')

// var h1 = document.createElement('h1')
// h1.id = 'myh1'
// h1.className = 'myh1Class'
// h1.innerHTML = 'this is heading h1'
// body.appendChild(h1)

// var h3 = document.createElement('h3')
// h3.id = 'myh3'
// h3.innerHTML = 'this is heading h3'

// var div = document.createElement('div')

// div.id = 'mydiv'
// div.innerHTML = 'this is div'


// var beforebtn = document.getElementById("addbefore")

// beforebtn.addEventListener('click', beforeMethod)

// function beforeMethod() {
//     body.insertBefore(div, h1)
// }


// var afterbtn = document.getElementById("addafter")

// afterbtn.addEventListener('click', afterMethod)

// function afterMethod() {
//     body.appendChild(h3)
// }


// var updatebtn = document.getElementById("update")

// updatebtn.addEventListener('click', updateMethod)

// function updateMethod() {
//     body.replaceChild(h3, h1)
// }


// var deletebtn = document.getElementById("delete")

// deletebtn.addEventListener('click', deleteMethod)

// function deleteMethod() {
//     body.removeChild(div)
// }



// body.replaceChild(div, h1)

// var addBeforeBtn = document.getElementById('addbefore')
// function addBefore() {
//     body.insertBefore(h1, para)
// }
// addBeforeBtn.addEventListener('click', addBefore)


// var addBtn = document.getElementById('addafter')

// function addAfter() {
//     body.appendChild(paraTex)
// }
// addBtn.addEventListener('click', addAfter)



// var updateBtn = document.getElementById('update')
// function update() {
//     body.replaceChild(div, h1)
// }
// updateBtn.addEventListener('click', update)


// var deleteBtn = document.getElementById('delete')
// function deleteFun() {
//     body.appendChild()

// }

// deleteBtn.addEventListener('click', deleteFun)



// *** event handling in js **** //



