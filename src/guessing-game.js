class GuessingGame {
    constructor() {
        this.range = [];
        this.mid = null;
        this.lastGuess = null;
    }

    setRange(min, max) {
        for (let i = min; i <= max; i++) {
            this.range.push(i);
        }
    }

    guess() {
        this.mid = Math.floor(this.range.length / 2);
        this.lastGuess = this.range[this.mid];
        return this.lastGuess;
    }

    lower() {
        this.range = this.range.splice(0, this.mid + 1);
    }
    
    greater() {
        this.range = this.range.splice(this.mid, this.range.length);
    }
}

module.exports = GuessingGame;
