const firstLi = document.querySelector('li');

console.log(firstLi.parentElement.parentElement.parentElement)
// console.log(firstLi.parentElement.parentElement.parentElement)

console.dir(firstLi)

// ul 

const ul = document.querySelector('ul');

console.log(ul.children)

// vid: 35:26

console.log(ul.children[0].innerText)

const thirdLi = firstLi.nextElementSibling.nextElementSibling

console.log(thirdLi)