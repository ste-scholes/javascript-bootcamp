// find range on input on form

const range = document.querySelector('input[type=range]')

console.log(range.getAttribute('max'))
console.log(range.getAttribute('min'))
console.log(range.getAttribute('type'))

console.log(range.setAttribute('min','50'))

console.log(range.setAttribute('type','radio'))
console.log(range)