// const getDog = new Promise((resolve, reject) => {
//     const rand = Math.random();
//     if(rand < 0.5) {
//         resolve();

// const { reject } = require("async");

//     } else {
//         reject();
//     }
// })


// getDog.then(() => {
//     console.log('Yippe we got a dog!')
// })
// getDog.catch(() => {
//     console.log('On no, no dog for you!')
// })



// version 2 - timeout is waiting for request to fulfil

// const getDog = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const rand = Math.random();
//     if(rand < 0.5) {
//         resolve();

//     } else {
//         reject();
//     }

//     }, 5000)
    
// });


// getDog.then(() => {
//     console.log('Yippe we got a dog!')
// })
// getDog.catch(() => {
//     console.log('On no, no dog for you!')
// })

// version 3
const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 5000);
  });
};

makeDogPromise()
  .then(() => {
    console.log("Yippe we got a dog!");
  })
  .catch(() => {
    console.log("On no, no dog for you!");
  });

// fake request random number driven

// const fakeRequest = (url) => {
//   return new Promise((reolve, reject) => {
//     setTimeout(() => {
//       const randN = Math.random();
//       if (randN < 0.3) {
//         reject({status: 404});
//       } else {
//           const pages = {
//               '/users': [
//                   {id: 1, username: 'Bilbo'},
//                   {id: 5, username: 'Frodo'}
//               ],
//               '/about': 'This is the about page!'
//           };
//           const data = pages[url];
//         reolve({status: 200, data});
//       }
//     }, 1000);
//   });
// };
// fakeRequest('/about')
//   .then((res) => {
//       console.log('Status Code', res.status);
//       console.log('Status Code', res.data)
//     console.log("Request worked");
//   })
//   .catch((res) => {
//     console.log(res.status);
//     console.log("Failed!!!");
//   });

  // fake request 2 

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
              const pages = {
                '/users': [
                    {id: 1, username: 'Bilbo'},
                    {id: 5, username: 'Frodo'}
                ],
                '/about': 'This is the about page!'
            };
            const data = pages[url];
            if(data){
                resolve({status: 200, data});
            } else {
                reject({status: 404})
            }
          
      }, 1000);
    });
};

  fakeRequest('/users')
    .then((res) => {
        console.log('Status Code', res.status);
        console.log('Status Code', res.data)
      console.log("Request worked");
    })
    .catch((res) => {
      console.log(res.status);
      console.log("Failed!!!");
    });

    fakeRequest('/dogs')
    .then((res) => {
        console.log('Status Code', res.status);
        console.log('Status Code', res.data)
      console.log("Request worked");
    })
    .catch((res) => {
      console.log(res.status);
      console.log("Failed!!!");
    });