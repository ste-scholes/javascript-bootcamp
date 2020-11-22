// alert("It's working");

// console.log(3+4);

//console.error('Oh no')

// console.log(3+4, 'hello', true, 10 - 5) // pass multiple things in console.log

if (1 !== 1 ) {
    console.log('True')
} else {
    console.log('False!')
}

// example 2

let rating = 0

if (rating >= 3) {
    console.log('Your a star!')
} else if (rating === 2 ) {
    console.log('Try harder')
} else {
    console.log('You need to imporve')
}

// example 3

let num = 37

if (num % 2 !==0) {
    console.log('Odd Number!')
}

// Else if

let myRating = 1

if (myRating === 3) {
    console.log('Your a star')
} else if (myRating === 2) {
    console.log('Your okay')
} else if (myRating === 1) {
    console.log('You need to improve')
} else {
 console.log('Error!')
}


// example game highscore

let highScore = 1345;
let userScore = 1560;

if (userScore >= highScore) {
    console.log(`Well done, New High Score of ${userScore}`);
    highScore = userScore;
} else {
    console.log('Sorry your score of ' + userScore + ' did not beat the score of ' + highScore)
}

// password


let password = 'kitty';

if (password.length >= 6) {
    if(password.indexOf(' ') === -1) {
        console.log('Valid Password')
    } else {
        console.log('Passord is long enough but cant have spaces')
    }
} else {
     console.log('Password must be longer!')
}


// truthy example

let mystery = 5;

if(mystery) {
    console.log('Truthy!')
} else {
    console.log('Falsy')
}

// another example

let userLoggedIn = 'stephen123'

if (userLoggedIn === 'stephen123') {
    console.log('You are logged in ' + userLoggedIn)
} else {
    console.log('Please log in')
}

// logical operators

// && example  - both side of extression have to be true

let newPassword = 'tacotuesday'

if(newPassword.length >= 6 && newPassword.indexOf(' ') === -1){ // -1 means does not exist
    console.log('Valid Password') 
} else {
    console.log('Invalid password');
}

// && example 2

let numNew = 11

if(numNew >= 1 && numNew <= 10) {
    console.log('Number between one and ten')
} else {
    console.log('Please guess number between one and ten')
}

// || OR - one or either need to pass true

let age = 49

if(age < 6 || age >= 65) {
    console.log('you get in for free!')
} else {
    console.log('You pay full price')
}

let color = 'purple';

if (color === 'purple' || color === 'lilac' || color === 'orchid') {
    console.log(color + ' is  loverly color, good choice!')
} else {
    console.log('I don\'t like the color ' + color)
}

// !Not example

let loggedUser ='ste'

if (!loggedUser){
    console.log('get out of here!')
}

// another example

let flavour = 'sasparilla';

if(flavour !== 'grape' && flavour !== 'cherry') {
    console.log(`We dont have ${flavour} knobhead`)
}

// another way is to negate the entire if statement

if (!(flavour === 'grape' || flavour === 'cherry')) {
    console.log(`We dont have ${flavour} tittyboy`)
}

// switch operator

let day = 7;

switch(day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
    default:
        console.log('Invalid Day')
} 
// if some cases have the same output value you can chain them together

let emoji = 'egg plant'

switch(emoji) {
    case 'happy face':
    case  'sad face':
    console.log('yellow');
    break;
    case  'egg plant':
    console.log('purple');
    break;
    case  'heart':
    case  'lips':
    console.log('red');
    break;
    default:
        console.log('Invalid')
}

// ternary 

let num7 = 7

if (num7 === 7 ) {
    console.log('Lucky')
} else {
    console.log('Bad')
}

// example changed to ternary 

let numSeven = 7

numSeven === 8  ? console.log('Lucky number ' + numSeven ) : console.log('Unlucky');

// Chat online offline bubble example using if

let status = 'offline'

let statusColor
if (status === 'offline') {
    statusColor = 'red';
} else {
    statusColor = 'green';
}

console.log(statusColor)

// chat online offline using ternary

let myColor  =  status === 'offline' ? 'red' : 'green';

console.log(`${status} ${myColor}`)