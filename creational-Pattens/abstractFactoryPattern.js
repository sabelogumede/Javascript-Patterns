//Abstract Factory pattern

/**
 * where you abstract the factories and are able to create 
 * multiple factories, classes etc....
 * 
 *  */

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

//cars-factory "creating specific intance types"
class CarFactory {
    createCar(type) {
        switch (type) {
            case 'civic':
                return new Car(4, 'V6', 'grey')
            case 'honda':
                return new Car(2, 'V4', 'red')
        }
    }
}

//-----------
class Suv {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

//suvs-factory "creating specific intance types"
class SuvFactory {
    createSuv(type) {
        switch (type) {
            case 'cx5':
                return new Car(4, 'V12', 'green')
            case 'senta fe':
                return new Car(2, 'V4', 'red')
        }
    }
}

const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

//Abstract factory for creating different/multiple models of instance types
const autoManufacture = (type, model) => {
    switch (type) {
        case 'car':
            return carFactory.createCar(model);
        case 'suv':
            return suvFactory.createSuv(model);
    }
}

//parse type and name
const cx5 = autoManufacture('suv', 'cx5');
const civic = autoManufacture('car', 'civic');

console.log(cx5);
console.log(civic);