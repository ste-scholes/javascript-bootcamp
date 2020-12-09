// example

//set time out method 5000 = 5 seconds


// function grumpus (name, time) {
//     alert('Boo!')
// }
// setTimeout(grumpus, 5000);

function grump(){
    alert('Stop clicking my button')
}



// function alertMe(name) { 
//     setTimeout(function() {

// alert('Welcome ' + name)
// },3000);
// }


// alertMe('Ste')


//  

const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    alert('Why did you click me?')
})



const cta = document.querySelector("button.grumpus");
cta.addEventListener('click', grump)