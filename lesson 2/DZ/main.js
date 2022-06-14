const btn = document.querySelector('.btn')
const box = document.querySelector('.box')

let xPosition = 0;
let yPosition = 0;

const moveOn = () => {
    if (xPosition < 400 && yPosition === 0){
        xPosition += 10;
        box.style.left = `${xPosition}px`
        setTimeout(moveOn, 100)

    } else if (xPosition >= 400 && yPosition < 400){
        yPosition += 10;
        box.style.top = `${yPosition}px`
        setTimeout(moveOn, 100)
    } else if (xPosition > 0 && yPosition >= 400){
        xPosition -= 10;
        box.style.left = `${xPosition}px`
        setTimeout(moveOn, 100)
    } else if (xPosition === 0 && yPosition > 0) {
        yPosition -= 10;
        box.style.top = `${yPosition}px`
        setTimeout(moveOn, 100)
    }
}
btn.addEventListener('click', moveOn)

/////

const interval = setInterval(()=> {
    console.log('= количество секунд с момента запуска')
}, 1000)

setTimeout(()=> {
    clearInterval(interval)
}, 5000)
