// const add = function(x,y) {
//     return x + y
// }

// // create a method 

// const math = {
//     add
// }




// usual way of having multiple methods

const math = {
    add: function(x,y){
        return x + y;
    },
    multiply: function(x,y){
        return x * y;
    },
    subtract: function(x,y){
        return x - y;
    }
}


console.log(math.subtract(5,10))


// method without key: vlaue

const auth = {
    username: 'Stephen',
    login() {
        console.log('You Logged in!')
    },
   logout() {
       console.log('Goodbye')
   }
}

console.log(auth.logout())