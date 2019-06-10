//Prototype/Class design patterns

/**
 * allows us to define a blueprint for a specific type of item and then reuse it
 * by creating a object from that class
 *  */

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

}

const civic = new Car(3, 'v8', 'red');

console.log(civic);