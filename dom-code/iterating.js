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
// appendChild new LI


const parentUL = document.querySelector('ul')
console.log(parentUL)
const newLI = document.createElement('li')
console.log(newLI)

newLI.innerText = 'Feed the Cat'
parentUL.appendChild(newLI)

// inserBefore

const firstLI = document.querySelector('li.todo')

parentUL.insertBefore(newLI, firstLI)
// insert above last element
const lastUL = document.querySelectorAll('li.todo')[2]
parentUL.insertBefore(newLI, lastUL)

// alternate way of doing the above

const i = document.createElement('i')
i.innerText = 'I am Italics '


// first p tag on page
// const firstP = document.querySelector('p')

firstP.insertAdjacentElement('afterbegin', i)

// 1:25

// append

firstP.append(i, newLI)
firstP.prepend(i, newLI)

const pNew = document.querySelector('p.new')

const  text = document.createElement('b')
text.innerText = 'Here is some text'

pNew.append(i, text)

// remove child (remove peas from list)

// target parent - in a section and a ul => PARENT

const ulPeas = document.querySelector('section ul')

// target item you want removing - note ulPeas.querySelector => CHILD

const removePeas = ulPeas.querySelector('.special')

// remove element

// pattern -> parent -> remove child => child

const deleted = ulPeas.removeChild(removePeas)

// the removed child is returnd in the variable

console.log(deleted)

// 1:31

const h3 = document.querySelector('h3');

h3.remove()