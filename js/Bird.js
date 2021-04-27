const Animal = require('./Animal.js');

/*
Bird:
- parametrus: name, color, sound, wingsCount, canFly
- metodai: voice, introduce, flyAway
*/

class Bird extends Animal {
    constructor(name, color) {
        super(name, color)
        this.sound = 'Cip captain';
        this.wingsCount = 2;
        this.canFly = true;
    }

    flyAway() {
        if (this.canFly) {
            console.log(`${this.name}: flew away...`);
        } else {
            console.log(`${this.name}: can not fly away :(`);
        }
    }
}

module.exports = Bird;