//Ассинхронность
//
// console.log('Hello one');
//
// setTimeout(()=> {
//     console.log('Hello two')
// }, 2000);


// const interval = setInterval(()=> {
//     console.log('Interval')
// }, 2000);
//
// setTimeout(()=> {
//     clearInterval(interval)
// }, 6000)
////////
// const btn = document.getElementById('btn')
// const block = document.querySelector('.block')
//
// let position = 0;
// let topPosition = 0;
// let bottomPosition = 0;
//
// const blockMove = () => {
//     if (position <= 400) {
//         position += 20;
//         block.style.left = `${position}px`
//         setTimeout(blockMove, 100)
//     } else if (position > 400 && topPosition < 400) {
//         topPosition += 20;
//         block.style.top = `${topPosition}px`
//         setTimeout(blockMove, 100)
//     } else if (topPosition > 400 && bottomPosition < 400){
//         bottomPosition -= 20;
//         block.style.right = `${bottomPosition}px`
//         setTimeout(blockMove, 100)
//     }
// }
// btn.addEventListener('click', blockMove)

////Замыкание
const func = (n) => {
    return function (num){
        return n + num;
    }
}
const addOne = func(1)
console.log(addOne(10))