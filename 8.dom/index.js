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
// // var para2 = document.getElementById('myid-2')

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
//     value.style.color = 'white'
// }

// ** tag**

// var element = document.getElementsByTagName('p')
// console.log(element)

// console.log(element[0].style.color = 'red')
// console.log(element[1].style.color = 'blue')

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

// var currentElement = document.getElementById('currentdiv')
// console.log(currentElement)

// //* element to parent

// var parent = currentElement.parentElement
// parent.style.background = 'blue'
// console.log(parent)

// // * element to previous sibling

// var preSibling = currentElement.previousElementSibling

// preSibling.style.color = 'red'
// console.log(preSibling)

// // * element to next sibling

// var nextSibling = currentElement.nextElementSibling
// nextSibling.style.color = 'green'
// console.log(preSibling)

// // * element to child

// var firstChild = currentElement.firstElementChild
// var lastChild = currentElement.lastElementChild

// var children = currentElement.children

// firstChild.style.color = 'yellow'
// lastChild.style.color = 'red'

// children[0].style.background = 'yellow'
// children[1].style.background = 'yellow'
// children[2].style.background = 'yellow'

// // or

// for (var value of children) {
//     console.log(value)
//     value.style.background = 'yellow'
// }

// **** how to create and add events ***


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
//     body.removeChild(para)

// }

// deleteBtn.addEventListener('click', deleteFun)






// // //    * from git ** How to create and add elements to dom ***

var para = document.createElement('p')

console.log(para)

para.id = 'myid'

para.className = 'myclass'

// para.innerHTML = 'this is para'

var paraText = document.createTextNode('this is para')
console.log(paraText)

para.appendChild(paraText)

var body = document.getElementById('body')
console.log(body)

var addAfterBtn = document.getElementById('addafter')
console.log(addAfterBtn)

console.log(para);
function addAfter() {
    body.appendChild(para)
}

addAfterBtn.addEventListener('click', addAfter)


var h1 = document.createElement('h1')

h1.id = 'myh1id'
h1.className = 'myh1class'

h1.innerHTML = 'This is heading one'


var addBeforeBtn = document.getElementById('addbefore')
// console.log(body);
function addBeforeFun() {
    body.insertBefore(h1, body[0])
}
addBeforeBtn.addEventListener('click', addBeforeFun)

//  // ***How to replace child in dom

var div = document.createElement('div')

div.id = 'mydiv'

div.innerHTML = 'this is div'


var updateBtn = document.getElementById('update')

function update() {

    body.replaceChild(div, h1)
}
updateBtn.addEventListener('click', update)

var deleteBtn = document.getElementById('delete')

function deleteFun() {
    // para.remove()

    body.removeChild(para)
}

deleteBtn.addEventListener('click', deleteFun)


// my practice***

// var h1 = document.createElement('h1')
// h1.id = "myId"
// h1.className = "myClass"
// h1.innerHTML = "This is heading"

// var body = document.getElementById('body')  //we can get element by using id
// body.appendChild(h1)
// or
// document.body.appendChild(h1);   //instead of above 2 lines we can use this



// // or
// var textnode = document.createTextNode('This is Heading')
// console.log(textnode);
// var body = document.getElementById('body')
// console.log(body);

// body.appendChild(textnode)

// // console.log(h1);

// *from w3*Create a text node and append it to the document:

// const textNode = document.createTextNode("Hello World");
// document.body.appendChild(textNode);

// **Create a <h1> element with a text node:


// const h1 = document.createElement("h1");
// const textNode = document.createTextNode("Hello World");
// h1.appendChild(textNode);
// console.log(h1);

// var body = document.getElementById('body')
// body.appendChild(h1)
//or
// document.body.appendChild(h1);

//** Create a <p> element with a text node:


// const para = document.createElement("p");
// const textNode = document.createTextNode("Hello World");
// para.appendChild(textNode);
// document.body.appendChild(para);

// **w3schools* insertBefore  :

// const newNode = document.createElement("li");
// const textNode = document.createTextNode("Water");
// newNode.appendChild(textNode);
// console.log(newNode);


// const list = document.getElementById("myList");
// list.insertBefore(newNode, list.children[0]);
// // list.appendChild(newNode)
// console.log(list);

// ---w3sc insertBefore------

// var ul = document.createElement('ul')
// // ul.id = "myDiv"
// var li = document.createElement("li")
// var textnode = document.createTextNode("water")
// li.appendChild(textnode)
// ul.appendChild(li)

// body = document.getElementById("body")
// body.appendChild(ul)
// //or
// // document.body.appendChild(ul)

// var li2 = document.createElement("li")
// var li2Text = document.createTextNode("oil")
// li2.appendChild(li2Text)

// console.log(li2);
// ul.insertBefore(li2, ul.children[0])  //or
// // ul.insertBefore(li2, null)  //

// console.log(ul);
