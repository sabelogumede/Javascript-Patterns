//Singleton pattern

/**
 * is simple preventing a class from creating more than one instance of a particular class.
 *  */

let instance = null;


class Car {
    constructor(doors, engine, color) {
        //check if there is no instance of that class = create
        if (!instance) {
            this.doors = doors;
            this.engine = engine;
            this.color = color;
            //parse object created
            instance = this;
        } else {
            //if there is return it = no need to create again
            return instance;
        }
    }

}

//new class extention
// class Suv extends Car {
//     constructor(doors, engine, color) {
//         super(doors, engine, color);
//         //initialize local variables to extend class
//         this.wheels = 4;
//     }
// }

const civic = new Car(3, 'v8', 'red');
const honda = new Car(4, "V6", 'blue');

console.log(civic);
//print civic values again, this blocking creation of a new class from "Car" instance
console.log(honda);