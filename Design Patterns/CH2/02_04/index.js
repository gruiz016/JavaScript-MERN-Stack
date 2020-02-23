class Car {
    constructor(doors = 4, engine = 'V4', color = 'White') {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class carFactory {
    createCar(type) {
        switch (type) {
            case 'honda':
                return new Car(4, 'V4');
            case 'challenger':
                return new Car(2, 'V8');
            case 'charger':
                return new Car(4, 'V6', 'Black');
        }
    }
}

const factory = new carFactory();
const honda = factory.createCar('honda');

console.log(honda);

