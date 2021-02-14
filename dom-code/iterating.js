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

// const allLis = document.querySelectorAll('li');

// const colors = ['red','orange','yellow','green','blue','purple']

// allLis.forEach((li, i) => {
//     const color = colors[i];
//     li.style.color = color;
// })

// const styles = getComputedStyle(h1)

// console.log(styles)

// to do list 57:54

const todo = document.querySelector('#todos .todo')

// change style one-by-one
// todo.style.color = 'gray'
// todo.style.textDecoration = 'line-through'
// todo.style.opacity = '50%'

// class sone created in example.css

console.log(todo.getAttribute('class')) // todo

todo.setAttribute('class', 'done') // this overwrite any applied style
todo.setAttribute('class', 'todo done') // this adds more than one class

todo.classList.remove('done') // classlist to remove class done

todo.classList.add('done') // adds class done

todo.classList.toggle('done'); // returns true;
todo.classList.toggle('done'); // returns false;

console.log(todo.classList) // prints DOMTokenList

// create element h2

const newh2 = document.createElement('h2');

newh2.innerText = "It's ten o'clock here's Johnny"

newh2.classList.add('special') // adds class special to newh2

console.log(newh2)

// appendchild 1:11

const section = document.querySelector('section');

section.appendChild(newh2)

// add image

const newImg = document.createElement('img');
newImg.src='https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1301&q=80';
newImg.style.width='400px'; // style for image size
document.body.appendChild(newImg); // add to page in body

// add video or anchor tag

const newLink = document.createElement('a');
newLink.innerText = ' JavaScript Course. Click Here!'
newLink.href = 'https://www.youtube.com/watch?v=PeK7jqh-LOc&t=4264s';


const firstP = document.querySelector('p');
firstP.appendChild(newLink);
newLink.classList.add('white')

// 1:17
