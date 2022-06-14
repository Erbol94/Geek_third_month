const inputIn = document.getElementById('input')
const btn = document.getElementById('btn')

const regExp = /1 \d{5}-\d{4}-\d{4}/;

btn.addEventListener('click', ()=> {
    if (regExp.test(inputIn.value)){
        console.log(inputIn.value)
    } else {
        console.log('Error')
    }
})

const btnMove = document.getElementById('btnMove')
const block = document.querySelector('.child')

let num = 0;
const moveOn = () => {
    num += 15;
    block.style.left = `${num}px`
}
btnMove.addEventListener('click', moveOn)
