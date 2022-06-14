//Регулярное выражение
//
// let str = prompt('whats your name?')
//
//
// const regExp = /erbol/i;   // флаги i и g
//
// console.log(str.match(regExp));


// let letter = 'aaaBBFFSssAasd'
// const regExp = /s/gi;
// console.log(letter.match(regExp));
/////
// const numbers = '1234532145';
// const regExp = /\d/g; // классы w и d
//
// // console.log(numbers.match(regExp));
// console.log(numbers.replace(regExp, '*'));

// const phoneInput = document.querySelector('.phoneInput')
// const phoneCheck = document.querySelector('.phoneCheck')
// const phoneResult = document.querySelector('.phoneResult')
//
// const phoneRegExp = /^\+996 \d{3} \d{2} \d{2} \d{2}$/;
//
// phoneCheck.addEventListener('click', ()=> {
//     if (phoneRegExp.test(phoneInput.value)){
//         phoneResult.innerText = 'ok'
//         phoneResult.style.color = 'green'
//     }else {
//         phoneResult.innerText = 'error'
//         phoneResult.style.color = 'red'
//     }
// });

//Рекурсия - вызов функции внутри самой себя

// let num = 0;
// const count =()=> {
//     num++
//     console.log(num)
//     if (num < 100){
//         count()
//     }
// };
// count();
///

// const people ={
//     John: {
//         age:25,
//         parents: {
//             Kelly: 45,
//             parents: {
//                 Soprano: {
//                     age: 85,
//                     parents:{
//                         Barbara: {
//                             age:115
//                         }
//                     }
//                 }
//
//             }
//         }
//     },
//     Tony: {
//         age:32,
//         parents: {
//             Alla:68
//         }
//     }
// };
//
// const parentsList = (obj) => {
//     if (obj.parents){
//         for (let key in obj.parents){
//             console.log(key)
//             parentsList(obj.parents[key])
//         }
//     }
// }
//
// for (let key in people){
//     parentsList(people[key])
// }
