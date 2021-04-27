const Animal = require('./Animal.js');

class Fish extends Animal {
    constructor (name, color) {
        super (name, color)
        this.canSwim = true;
    }

    introduce() {
        console.log(`As esu ${this.name}, mano spalva ${this.color}.`);
    }

    swimAway() {
        if(this.canSwim) {
            console.log(`${this.name} plaukia salin.`);
        } 
    }

}

module.exports = Fish;