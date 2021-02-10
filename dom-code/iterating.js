const allLi = document.querySelectorAll('li');

// for (let i = 0; i < allLi.length; i++){
//    console.log(allLi[i].innerText = 'Hello World');
// }

// for of loop

// for (let li of allLi){
//     li.innerHTML = '<b> Hello </b> World!'
// }

// changing styles using javascript

const h1 = document.querySelector('h1');

h1.style.color = "green"
// h1.style.backgroundColor = 'black'

console.log(h1.style)

const p = document.querySelector('p');

p.style.color = "white"

p.style.backgroundColor = "black" 

// add multiple styles all at once

const allLis = document.querySelectorAll('li');

const colors = ['red','orange','yellow','green','blue','purple']

allLis.forEach((li, i) => {
    const color = colors[i];
    li.style.color = color;
})

const styles = getComputedStyle(h1)

console.log(styles)

// to do list 57:54