const form = document.querySelector('#signup-form');

// form.addEventListener('submit', function(e) {
//     alert('Form submitted');
//     console.log(e)
//     e.preventDefault();
// })

// extract data from form

// checkbox doesn't work properly with .value - use checked
// e.preventDefault() prevents the default submission behaviour for the form

// const cc = document.querySelector('#cc');
// const terms = document.querySelector('#terms');
// const car = document.querySelector('#car');

// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     console.log('Credit Card ', cc.value);
//     console.log('T&C ', terms.checked);
//     console.log('Cat Make', car.value);
    
// })


const cc = document.querySelector('#cc');
const terms = document.querySelector('#terms');
const car = document.querySelector('#car');

// register a change as soon as someone types or ticks a box
// input event
// const formData = {};
// cc.addEventListener('input', (e) => {
//     console.log('CC changed', e);
//     formData['cc'] = e.target.value;
// });

// car.addEventListener('input', (e) => {
//     console.log('Car changed', e);
//     formData['car'] = e.target.value;
// });

// terms.addEventListener('input', (e) => {
//     console.log('Terms', e);
//     formData['terms'] = e.target.checked;
// });

// all the above in one
//Important - we can use 'change' instead of 'input' in the below code, the only difference is change only registers once a change is made
// say you are writing a number, it will only register the input when you lose focus or press enter. Works on text fields

const formData = {};

for (let input of [ cc, terms, car ]) {
input.addEventListener('input', ({target}) => {
    const {name, type, value, checked} = target
        formData[name] = type === 'checkbox' ? checked : value;
        console.log(formData)
    })
}

// from the previous the (e) has been destructured to ({target}) then further destructured to its components name, type, value, checked

// the above take the name: card type: text value: 1234 and checked: ??dont know??  this type doesn't have a checkbox so use value
// next take name: TnC type: checkbox value: checked/true this type does have a checkbox so use it's value