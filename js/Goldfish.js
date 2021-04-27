const Fish = require('./Fish.js');

class Goldfish extends Fish {
    constructor (name, color) {
        super (name, color);
        this.grantsWishes ='';
    }

    makeWish (grantsWishes) {
        this.grantsWishes = grantsWishes;
        console.log(grantsWishes);
    }
}

module.exports = Goldfish;