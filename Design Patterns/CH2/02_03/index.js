let instance = null;

class Car {
    constructor(doors, engine, color) {
        if(!instance) {
            this.doors = doors;
            this.engine = engine;
            this.color = color;
            this.wheels = 4;
            instance = this;
        } else {
            return instance;
        }
    }
}

const civic = new Car(4, 'V6', 'grey');
const challenger = new Car(2, 'V8', 'black');

console.log(civic, challenger);
