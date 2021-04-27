const Animal = require('./Animal.js')

/*
Pet:
- parametrus: name, color, sound
- metodai: voice, introduce
*/

class Pet extends Animal {
    constructor(name, color) {
        super (name, color);
    }
}

module.exports = Pet;