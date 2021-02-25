const colors = ['red','orange','yellow','green','blue','purple','indigo','violet'];

const changeColor = function(evt) {
    console.log(evt) // shows event info
    const h1 = document.querySelector('h1') // selects h1
    h1.style.color = this.style.backgroundColor; // 
};



const container = document.querySelector('#boxes'); // selects section ID boxes

for(let color of colors) { // loops through colors
    const box = document.createElement('div'); // creates a div
    box.style.backgroundColor = color; // assigns background color
    box.classList.add('box') // assigns a class of 'box' to div
    box.innerText = `${color}` // adds text color from array
    container.appendChild(box) // adds the box(s) to the section ID boxes
    box.addEventListener('click', changeColor)
}

// add a key press
// the (e) contains the info regarding what key was pressed

document.body.addEventListener('keypress', function(e) {
    console.dir(e);
})