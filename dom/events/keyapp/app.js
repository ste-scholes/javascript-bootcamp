const input = document.querySelector('#username');

// (e) is an event object that holds info about what key is pressed

// KEYDOWN FIRES NO MATTER WHAT KEY IS PRESSED  

input.addEventListener('keydown', function(e) {
    console.log('keydown')
})


// keyup fires everytime you release a key after pressing

input.addEventListener('keyup', function(e) {
    console.log('keyup')
})

// differes from browser to browser
// a keypress shouldtrigger a character or space for example shift key should not trigger it, not ctrl etc
// return DOES count as a keypress!

input.addEventListener('keypress', function(e) {
    console.log('keypress')
})

// app code starts here

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        if(!this.value) return; // stops an empty string
      const newItemText = this.value; // adds new item to list - by pressing 'Enter'
      const newItem = document.createElement('li'); // we create a new li to hold the new item
      newItem.innerText = newItemText; // takes value of newItemText and adds it as text in the newItem li
      itemsUL.appendChild(newItem); // finally we add the new item
      this.value = ''; // this clears the item out of the box by setting it to an empty string
    }
})