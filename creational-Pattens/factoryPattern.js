//Factory pattern

/**
 * is a mechanism/stystem used to create other objects.
 * Like a factory for creating cars!
 *  */

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

}

//factory
class carFactory {
    createCar(type) {
        switch (type) {
            case 'civic':
                return new Car(4, 'V6', 'grey')
            case 'honda':
                return new Car(2, 'V4', 'red')
        }
    }
}
//initialize our new instance factory from carFactory class
const factory = new carFactory();

//initial honda from our factory
const honda = factory.createCar('honda')

console.log(honda);