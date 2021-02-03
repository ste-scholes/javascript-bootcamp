// page1.html
const img = document.getElementById('winter');

console.dir(img)

const elements = document.getElementsByTagName('input');

console.dir(elements);

console.log('Element at index 0 is:' + elements[1])

for(let input of elements) {console.log(elements)}

const arr = [...elements]

console.log(arr)

// to capture data from form 

const formData = document.getElementsByTagName('input');

console.log(formData[0])

for(let input of formData) {console.log(input.value)}

// class name

const header = document.getElementsByClassName('header');

console.log(header)

const list = document.getElementsByClassName('special')

console.log(list)

// below returns all with class special

const special = document.getElementsByClassName('special');

console.log(special)

// if I want to isolate the li tag - the below means [array] index 0 or the first element

const ul = document.getElementsByTagName('ul')[0]
console.log(ul)
// ul brings back the ul that now has it's own version of getElementsByClassName that can be searched for 'special'
const specialLi = ul.getElementsByClassName('special')

console.log(specialLi)

// querySelector

const head = document.querySelector('h1');

console.log(head)

const para = document.querySelector('p');

console.log(para)

// select by id

const main = document.querySelector('#main');

console.log(main)