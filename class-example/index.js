// ES6 Classes
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
}

const lenny = new User('Lenny', 50);
const ada = new User('Ada', 30);

console.log('Lenny: ', lenny.getName());

lenny.setName('Alice');

console.log('Lenny: ', lenny.getName());
console.log('Ada: ', ada);


// Classes with prototype
function PrototypeUser(name) {
    this.name = name;
}

PrototypeUser.prototype.getName = function getName() {
    console.log('Du heter ', this.name);
}

const alice = new PrototypeUser('Alice');

console.log('Alice with prototype ', alice);