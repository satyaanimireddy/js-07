

// console.log(window);
// console.log(window.document);
// console.log(window.navigator);
// console.log(window.location);
// console.log(window.history);
// console.log(window.screen);

// console.log(window.innerHeight);
// console.log(window.innerWidth);

// console.log(window.screen.height);
// console.log(window.screen.width);

// console.log(window.navigator.appName);
// console.log(window.navigator.platform);
// console.log(window.navigator.language);
// console.log(window.navigator.onLine);


// window.setTimeout(() => {
//     console.log('time out');
// }, 4000)

// window.setInterval(() => {
//     console.log('Interval');
// }, 2000)


// console.log(window.localStorage);
// console.log(window.sessionStorage);
// console.log(window.fetch);

// alert('hello')
// prompt('hii')
// confirm('confirm')

// how to open new window:

// var mywin

// var openwin = document.getElementById('open')
// var openFun = () => {
//     mywin = window.open('', '', 'width=300px, height=200px')
// }
// openwin.addEventListener('click', openFun)

// // how to close new window

// var closewin = document.getElementById('close')
// var closeFun = () => {
//     mywin.close()
// }
// closewin.addEventListener('click', closeFun)

// // how to move window

// var movewin = document.getElementById('move')

// var moveFun = () => {
//     return mywin.moveTo(400, 400)
// }
// movewin.addEventListener('click', moveFun)


//how resize :

// var resizewin = document.getElementById('resize')

// var resizewinFun = () => {
//     return mywin.resizeTo(100, 600)
// }
// resizewin.addEventListener('click', resizewinFun)



// document object:

// window.document.getElementById()
// window.document.createElement()
// window.document.title


// navigator object:

// console.log(window.navigator);
// console.log(window.navigator.appName);
// console.log(window.navigator.platform);
// console.log(window.navigator.language);
// console.log(window.navigator.onLine);

// screen object :

// console.log(window.screen.height);
// console.log(window.screen.width);

// location object:

// console.log(window.location);
// console.log(window.location.href);
// console.log(window.location.hostname);
// console.log(window.location.pathname);
// console.log(window.location.port);
// console.log(window.location.protocol);
// console.log(window.location.origin);

// var loadDoc = document.getElementById('load')

// var loadDocFunc = () => {
//     window.location.assign('https://www.google.com/')
// }
// loadDoc.addEventListener('click', loadDocFunc)


// history object:

// console.log(history);



// back:
// var backBtn = document.getElementById('back')
// var backFunc = () => {
//     window.history.back()
// }
// backBtn.addEventListener('click', backFunc)


// forward:
var forwordBtn = document.getElementById('forword')

var forwordFun = () => {
    return window.history.forward()
}
forwordBtn.addEventListener('click', forwordFun)