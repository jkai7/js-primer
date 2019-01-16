function forEachCar(array, callbackFunction) {
    for(let i = 0; i < array.length; i++) {
        const arrayElement = array[i];

        callbackFunction(arrayElement);
    }
};

class CarService {
    constructor(name, country) {
        this.name = name;
        this.country = country;
        this.carsToRepair = [] // new Array() - is the same thing 
    }

    addCar(car) {
        this.carsToRepair.push(car);
    }

    displayCustomName() {
        console.log('I am custom name function');
    }

    displayAllCars() {

        forEachCar(this.carsToRepair, (car) => {
            this.displayCustomName();
            car.displayCarInformation();
        });

        // this.carsToRepair.forEach(function(car) {
        //     car.displayCarInformation();// taking function from car.js and using it to display all cars in cars to repair array
        // });
    }
};

module.exports = CarService // exports the class CarService to be used in other js files, in this case index.js (this is an example of modularity)