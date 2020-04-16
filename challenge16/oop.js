class Tyre {
    constructor(brand, size) {
        this.brand = brand;
        this.size = size;
    }
}

class Car {
    constructor(variant, tyre, seat, door, year, warranty) {
        this.tyre = tyre;
        this.seat = seat;
        this.door = door;
        this.variant = variant;
        this.engineNumber = Car.engineNumber();
        this.year = year;
        this.warranty = warranty;
    }

    static engineNumber() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

class Rush extends Car {
    constructor(year) {
        super("Rush", new Tyre('bridgestone', '17inch'), 7, 5, year, 3)
    }
}

class Agya extends Car {
    constructor(year) {
        super("Agya", new Tyre('dunlop', '15inch'), 5, 4, year, 1)
    }
}

class CarFactory {
    constructor() {
        this.cars = [];
    }

    static getRandom() {
        return Math.floor(Math.random() * (9 - 1)) + 1;
    }
    produce(year) {
        // produksi Rush
        for (var i = 0; i < CarFactory.getRandom(); i++) {
            this.cars.push(new Rush(year));
        }

        // produksi Agya
        for (var i = 0; i < CarFactory.getRandom(); i++) {
            this.cars.push(new Agya(year));
        }
    }

    result() {
        console.log('Hasil Produksi : ');
        this.cars.forEach((item, i) => {
            console.log(`
            ${i + 1}. Engine Number : ${item.engineNumber}
            Variant : ${item.variant}
            Door : ${item.door}
            Seat : ${item.seat} seat
            Tyre : ${item.tyre.brand} with ${item.tyre.size}
            ===============================================
            `);
        });
    }

    guaranteeSimulation(yearSimulate) {
        // console.log('Simulasi Garansi pada tahun ${yearSimulate} :');
        console.log(`Simulasi Garansi pada tahun ${yearSimulate} :`);
        this.cars.forEach((item, i) => {
            console.log(`
            ${i + 1}. Engine Number : ${item.engineNumber}
            Variant : ${item.variant}
            Door : ${item.door}
            Seat : ${item.seat} seat
            Tyre : ${item.tyre.brand} with ${item.tyre.size}
            year : ${item.year}
            warranty : ${item.warranty} year
            status Warranty : ${(yearSimulate - item.year) > item.warranty ? 'expired' : 'active'}
       
               `);
        });
    }

}

const Toyota = new CarFactory();
Toyota.produce(2017);
Toyota.produce(2019);
Toyota.result();
Toyota.guaranteeSimulation(2022);