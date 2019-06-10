//Contructor patterns

/**
 * created class are used to initiate a new extended class from
 * class from it.
 *  */

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

}

//new class extention
class Suv extends Car {
    constructor(doors, engine, color) {
        super(doors, engine, color);
        //initialize local variables to extend class
        this.wheels = 4;
    }
}

const civic = new Car(3, 'v8', 'red');
const cx5 = new Suv(4, "V6", 'red');

console.log(civic);
console.log(cx5);