//object syntax
//key value pairs in curly braces
/* const myObj = {
  name: "dave",
};
console.log(myObj["name"]);
// object can have more than strings
const anotherObj = {
  alive: true,
  age: 42,
  hobbies: ["Eat", "sleep", "code"],
  beverages: {
    morning: "Tea",
    afternoon: "iced coffee",
  },
  action: function () {
    return "Hello! world!";
  },
  promote: function () {
    return `Time for ${this.beverages.afternoon}`;
  },
};
console.log(anotherObj.hobbies[0]);
console.log(anotherObj.beverages.afternoon);
console.log(anotherObj["beverages"]["afternoon"]);
console.log(anotherObj["hobbies"][1]);
console.log(anotherObj.action());
console.log(anotherObj["action"]());
console.log(anotherObj.promote()); */

const vehicle = {
  wheels: 4,
  engine: function () {
    return "vroom";
  },
};
/*  const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck); // because we have only created doors
console.log(truck.doors);
console.log(truck.wheels); //inheritance. but it inherited from the vehicle.
console.log(truck.engine()); */
const car = Object.create(vehicle);
car.doors = 5;
car.engine = function () {
  return "whoosh!";
};
const tesla = Object.create(car);
tesla.engine = function () {
  return "shssh....!";
};
console.log(tesla.doors);
console.log(tesla.engine());
console.log(tesla.wheels);
////next new band
const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John paul Jones",
  drums: "John Bonham",
};
/* delete band.drums;
console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
  console.log(`on ${job}, its's ${band[job]}`);
}
console.log(band.hasOwnProperty("drums"));
 */
//restructuring the whole variables
/* const { guitar: myVariable, drums: myBass } = band;
console.log(myVariable, myBass);

const { vocals, guitar, bass, drums } = band;// creating variables 
console.log(vocals);*/
function sings({ vocals }) {
  return `${vocals} sings!`;
}
console.log(sings(band));
