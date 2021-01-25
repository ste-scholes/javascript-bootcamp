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
    },
    laugh: () => {
        console.log(this);
        console.log(`${this.nickName} says hahahah!`)
    }
}
itsMe.first = 'Ste'
console.log(itsMe.printBio())

console.log(itsMe.laugh())


const annoyer = {
    phrases:  ['literally','cray cray', 'I cant even', 'totes', 'YOLO', 'Cant stop, wont stop'],
    pickPhrase(){
        const {phrases} = this;
        const index = Math.floor(Math.random() * phrases.length);
        return phrases[index]
    },
    start(){
        setInterval(function () {
            console.log(this.pickPhrase)
        }, 3000)
    }
}

// console.log(annoyer.stat())
    
// annoyer.start()
// annoyer.stop()

// setInterval(func, 3000)

const annoyed = {
    phrases:  ['literally','cray cray', 'I cant even', 'totes', 'YOLO', 'Cant stop, wont stop'],
    pickPhrase(){
        const {phrases} = this;
        const index = Math.floor(Math.random() * phrases.length);
        return phrases[index]
    },
    start() {
            this.timerId = setInterval(() => {
            console.log(this.pickPhrase())
        }, 3000)
    },
    stop() {
        clearInterval(this.timerId)
        console.log('Thank Christ')
    }
}

console.log(annoyed.start())
console.log(annoyed.stop())