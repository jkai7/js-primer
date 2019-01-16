const Car = require('./car');// importing the Car class from car.js
const CarService = require('./services/car-service');// imports CarService class from car-service.js

const carService = new CarService("Super Cars", "Spain, Malaga")

const carOne = new Car();// creates an instance of our class with the defaults provided

const carTwo = new Car("Honda", "Civic", 2000);

// carOne.displayCarInformation();

// carTwo.displayCarInformation();

carService.addCar(carOne)// pushes carOne into cars to repair array

carService.addCar(carTwo)

// console.log(carService.CarsToRepair)// shows all the cars in cars to repair array - this console log is obsolete with code below

carService.displayAllCars();// runs the "display all cars" code from car service which iterrates through the "cars to repair array" and shows the cars with the "display information" function from car.js which console logs our cars 
 

