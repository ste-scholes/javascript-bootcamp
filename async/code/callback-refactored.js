const btn = document.querySelector("button");


const moveX = (element, amount, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bodyBoundary = document.body.clientWidth;
            const elRight = element.getBoundingClientRect().right;
            const currLeft = element.getBoundingClientRect().left;
            if (elRight + amount > bodyBoundary) {
              reject({bodyBoundary, elRight, amount });
            } else {    
                element.style.transform = `translateX(${currLeft + amount}px) `;
                resolve();
                }
              }, delay);
    });

};


// moveX(btn, 300, 1000)
//   .then(() => {
//     return moveX(btn, 300, 1000);
//   })
//   .then(() => {
//     return moveX(btn, 300, 1000);
//   })
//   .then(() => {
//     return moveX(btn, 300, 1000);
//   })
//   .then(() => {
//     console.log("Done with both");
//   })
//   .catch(() => {
//     console.log("Out of space - cannot move");
//   });
  
// implicit return

// refactor the above code so that it will use implicit returns
// this only works if there is one expression and it is returned implicitly

moveX(btn, 300, 1000)
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .catch(({bodyBoundary, elRight, amount}) => {
    console.log(`Body boundry is ${bodyBoundary}px wide `);
    console.log(`Element is at ${elRight}px , ${amount}px is too large!`)
    alert('Out of space, cannot go off edge of screen!');
  });