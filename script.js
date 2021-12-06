/*
function loadEvent() {
    console.log("Hello!");
}

window.addEventListener("load", loadEvent);
*/

/*console.log("Hello");

let ertek = 2;
const tomb = [];
const tomb2 = [1, 2, 3];
//tomb = tomb2;


for (let i = 0; i < 10; i++) {  //ez egy rosszul strukturált kód varral
    //const element = 5;
    //element = 6;
    tomb.push(i);
    //ertek++;
    console.log("Cikluson belül: " + tomb[i]); //Ha let vagy const az element, akkor ezt a console.log-ot megjeleníti, ha var, akkor nem!
}
console.log("Cikluson kívül: " + tomb);
*/

class Car {
    constructor(model, type, maxSpeed) {
        this.model = model;
        this.type = type;
        this.maxSpeed = maxSpeed;
    }
    getTimeNeeded(distance) {
        let when = distance / this.maxSpeed;
        return when;
    }

}
const Petere = new Car("Toyota", "Auris", 180);
const Matee = new Car("Mazda", "6", 200);
const enyem = new Car("Porsche", "Cayman", 250);

console.log(Petere.getTimeNeeded(100));
console.log(Matee.getTimeNeeded(100));
console.log(enyem.getTimeNeeded(100));

///////////////////////////////////////////////////////////

const car1 = {
    model: "Toyota",
    type: "Auris",
    maxSpeed: 180
};
const car2 = {
    model: "Mazda",
    type: "6",
    maxSpeed: 200
};

function getTimeNeeded(distance, car) {
    let when = distance / car.maxSpeed;
    return when;
}

console.log(getTimeNeeded(100, car1));