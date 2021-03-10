const btn = document.querySelector("button");

// nested timeouts that move after time elapses

// setTimeout(() => {
//     btn.style.transform = 'translateX(100px)';
//     setTimeout(() => {
//         btn.style.transform = 'translateX(200px)';
//     }, 2000)
// }, 1000);

// refactored the above code

const moveX = (element, amount, delay, onSucess, onFail) => {
    setTimeout(() => {
  const screenWidth = document.body.clientWidth;
  const elRight = element.getBoundingClientRect().right;
  const currLeft = element.getBoundingClientRect().left;
  if (elRight + amount > screenWidth) {
    onFail();
  } else {    
      element.style.transform = `translateX(${currLeft + amount}px) `;
      onSucess();
      }
    }, delay);
};

// call the above original
// moveX(btn, 600, 2000)

// call the above using another call back to move more than the once
// original code
// moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//         moveX(btn, 100, 1000, () => {
//             moveX(btn, 100, 1000, () => {
//                 moveX(btn, 100, 1000)
//             });
//         });
//     });
// });

moveX(btn, 100, 1000, () => {
    console.log('step 1') // success
    moveX(btn, 100, 1000, () => {
        console.log('step 2')
        moveX(btn, 100, 1000, () => {
            console.log('step 3')
            moveX(btn, 100, 1000, () => {
                console.log('step 4')
                moveX(btn, 1000, 1000, () => {
                    console.log('final step')
                }, () => {
                    console.log('offscreen on final step')
                    alert('its gone pete tongue')
                })
            }, () => {
                console.log('offscreen step 4')
                
            })
        }, () => {
            console.log('offscreen step 3')
        })
    }, () => {
        console.log('offscreen step 2')
    })
}, () => {
    console.log('off screen step 1') // fail
})
