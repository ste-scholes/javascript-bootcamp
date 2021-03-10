// this bit of code shows that despit JS being single threaded it can mulittask by passing things off to the browser for it to handle.

// arrow function timeout

setTimeout(() => {
    console.log('I happen fourth')
}, 5000);


console.log('I happen first');

setTimeout(function() {
    console.log('I happen third')
}, 3000);

console.log('I happen second')

