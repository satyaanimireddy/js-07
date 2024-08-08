

// console.log("hello");
// console.log(100);
// console.log(true);
// console.log(undefined);
// console.log(null);
// console.log({});
// console.log([]);
// console.log(() => { });
// console.log(new Map())
// console.log(new Set())
// console.log(new WeakMap())
// console.log(new WeakSet())

// console.log(x);

// alert

// alert('hello')

// var value = prompt("enter value")

// if (value) {
//     console.log(value);
// } else {
//     console.log(value);
// }

// console.log(value);

// var value = confirm()
// console.log(value);

// document.write('hello')

// document.write('<h2>hello h2</h2>')

// var loadBtn = document.getElementById('load')
// var loadFun = () => {
//     document.write("new content, it will delete all the existing content and replace with this content,it will remove all the content in dom,so it is not preferable")  //it will delete all the existing content and replace with this content
// }
// loadBtn.addEventListener('click', loadFun)



// // inner html content text

var btnOne = document.getElementById('one')
var btnTwo = document.getElementById('two')
var btnThree = document.getElementById('three')

var mypara = document.getElementById('mypara')

var innerHtmlFun = () => {
    console.log("innerHtml");
    mypara.innerHTML = `This element is     <strong>strong</strong> and has <br/> some fun <code>code !</code>`
}

var innerTextFun = () => {
    console.log("innerText");
    mypara.innerText = `This element is <strong>strong</strong> and has <br/>        some fun <code>code !</code>`
}

var textContentFun = () => {
    console.log("textContent");
    mypara.textContent = `This element is <strong>strong</strong> and has   <br/>     some fun <code>code !</code>`
}

btnOne.addEventListener('click', innerHtmlFun)
btnTwo.addEventListener('click', innerTextFun)
btnThree.addEventListener('click', textContentFun)