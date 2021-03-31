
  
    // fake request 2 
  
  const fakeRequest = (url) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
                const pages = {
                  "/users": [
                    { id: 1, username: "Bilbo" },
                    { id: 2, username: "Don" },
                    { id: 5, username: "Esmerelda" },
                    
                  ],
                  "/users/1": {
                    id: 1,
                    username: "Bilbo",
                    upvotes: 360,
                    city: "Lisbon",
                    topPostID: 454321,
                  },
                  "/users/2": {
                    id: 2,
                    username: "Don",
                    upvotes: 250,
                    city: "Ashton",
                    topPostID: 456123,
                  },
                  "/users/5": {
                    id: 5,
                    username: "Esmerelda",
                    upvotes: 571,
                    city: "London",
                    topPostID: 454322,
                  },
                  "/posts/456123": {
                    id: 456123,
                    title:
                      "I love to perade down the stairs in ballet tights",
                  },
                  "/posts/454321": {
                    id: 454321,
                    title:
                      "Ladies and Gentlemen, may I intorduce my pet pig, Hamlet",
                  },
                  "/about": "This is the about page!",
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
  
    // fakeRequest('/users').then((res) => {
    //    const id =  res.data[1].id;
    //    fakeRequest(`/users/${id}`).then((res) => {
    //     console.log(res)
    // });
    //    });

// old code

// fakeRequest('/users').then((res) => {
//   const id = res.data[1].id;
//   fakeRequest(`/users/${id}`).then((res) => {
//     const postId = res.data.topPostID
//     fakeRequest(`/posts/${postId}`).then((res) => {
//       console.log(res);
//       });
//     });
//   });

// refactored
fakeRequest('/users')
.then((res) => {
  const id = res.data[1].id;
  console.log(res)
  return fakeRequest(`/users/${id}`);
})
.then((res) => {
    const postId = res.data.topPostID;
    console.log(res)
    return fakeRequest(`/posts/${postId}`);
    })
.then((res) => {
    console.log(res);
  })
.catch((err) => {
    console.log('error')
});

