class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
        this.wheels = 4;
    }
}

class Suv extends Car {
    constructor(doors, engine, color) {
        super(doors, engine, color);
    }
}

const civic = new Car(4, 'V6', 'grey');
const cx5 = new Suv(4, 'V4', 'red');

console.log(civic, cx5);
