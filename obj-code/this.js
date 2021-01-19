function sayHi() {
    console.log('Hi')
    console.log(this);
}

console.log(sayHi())

var color ='teal'

const greet = function() {
    console.log(this);
}

console.log(greet())

const person = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickName: 'Cher',
    fullName() {
        return(`${this.first} ${this.last} nickname: ${this.nickName}`);
    },
    printBio(){
      const fullName = this.fullName();
      console.log(`${fullName} is a person`)
    }
}

console.log(person.printBio())

// another example destructured

const itsMe ={
    first: 'Stephen',
    last: 'Scholes',
    nickName: 'Scully',
    fullName() {
       const {first, last, nickName} = this;
       return(`${first} ${last} aka ${nickName}`)
    },
    printBio() {
       const fullName = this.fullName();
       console.log(`${fullName} is a very tired person`)
    }
}
itsMe.first = 'Ste'
console.log(itsMe.printBio())