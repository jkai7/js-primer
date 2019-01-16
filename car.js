class Car {
    constructor(brand = "Default", model = "Default", year) {// constructor function defines the class 
        this.brand = brand,
        this.model = model,
        this.year = year || 2000;// set default argument here or directly in the arguments of the function
    }
    displayCarInformation() {// function to run after constructor
        console.log(this.brand, this.model, this.year)
    }
}

module.exports = Car // exports the class Car to be used in other js files, in this case index.js (this is an example of modularity) 