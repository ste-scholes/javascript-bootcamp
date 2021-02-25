const btn = document.querySelector('#clicker');


// btn.onclick = function(){
//     console.log('You touched my clacker')
// }

btn.onclick = function() {
    alert('You touched me clacker')
}

// CODE ABOVE FOR EXAMPLE

const yes = document.querySelector('#yes');


yes.addEventListener('click', function() {
    alert('You pressed me')
})

yes.addEventListener('click', function() {
    console.log('This also works? yes it does.. nice!')
})

const no = document.querySelector('#no');

no.addEventListener('mouseover', function() {
    no.innerText = 'Stop Touching!'
});

no.addEventListener('mouseout', function() {
    no.innerText = 'Click Here'
})

window.addEventListener('scroll', function() {
    console.log('Stop Scrolling')
})