///// Область видимости
// function varTest() {
//     var x = 1;
//      if (true) {
//          var x = 2;
//          console.log(x, 'log1')
//      }
//     console.log(x, 'log2')
// }
// varTest()
///
// function letTest () {
//     let x = 1;
//     if (true) {
//         let x = 2;
//         console.log(x, 'log1')
//     }
//     console.log(x, 'log2')
// }
// letTest()

/////

// const homeworkFinished = () => {
//     alert('My homework is finished')
// };
// const doHomeWork = (subject, callback) => {
//     alert(`Starting my ${subject} homework`)
//     callback()
// };
// doHomeWork('Math', homeworkFinished);

///////

const btn = document.querySelectorAll('button')


// btn.forEach((item) => {
//     console.log(item)
//     item.addEventListener('click', (event) => {
//         console.log(event.target);
//         if (event.target.classList.contains('red')){
//             event.target.classList.remove('red')
//         }else {
//             event.target.classList.add('red')
//         }
//     });
// });

const wrapper = document.querySelector('.btns');
const newBtn = document.createElement('button');
wrapper.appendChild(newBtn);

wrapper.addEventListener('click', (event)=> {
    if (event.target.tagName === "BUTTON") {
        // console.log(event.target)
        // console.dir(event.target)
        if (event.target.classList.contains('red')){
            event.target.classList.remove('red')
        }else {
            event.target.classList.add('red')
        }
    }
})