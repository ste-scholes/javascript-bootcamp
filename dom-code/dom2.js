// innertext

const h1 = document.querySelector('h1');

console.log(h1.innerText)


const ul = document.querySelector('ul')

console.log(ul.innerText)

const body = document.body.innerText;

console.log(body)

// changing text 
// h1.innerText = "Ste's Site"

// textContent - vid 7:30

const txtCon = h1.textContent

console.log(txtCon)

// innerhtml

const form = document.querySelector('ul');

console.log(form.innerHTML)



const addMe = document.querySelector('.add');

addMe.innerHTML = '<b>I am dynamic</b>'

const title = document.querySelector('h1');

title.innerHTML = 'Hello'

title.innerHTML +=' Im Stephen'

// form stuff

const fields = document.querySelectorAll('input')

console.log(fields[2].value)

console.log(fields)

console.log(fields[0].value)

console.log(fields[2].checked)

fields[1].placeholder = 'Piss Word'
