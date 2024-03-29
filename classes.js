/* class pizza {
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = "orginal";
    this.toppings = [];
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  gettopping() {
    return this.toppings;
  }
  settopping(pizzaToppings) {
    this.toppings.push(pizzaToppings);
  }
  bake() {
    console.log(`Baking a ${this.type} ${this.size} ${this.crust} pizza`);
    // we can also use return here
  }
} */
/* const myPizza = new pizza("thin", "peporoni");
/* myPizza.bake(); */
/* myPizza.size = "supreme"; // we can assign like this also but not desirable */
/* console.log(myPizza.size);
myPizza.settopping("sausage");
myPizza.settopping("pork");
myPizza.bake();
console.log(myPizza.gettopping()); */

// new pizza class parent clsass or supr class
/* class Pizza {
  constructor(pizzaSize) {
    this.size = pizzaSize;
    this.crust = "original";
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    return this.crust(pizzaCrust);
  }
}
 */
//naming convention
/* class Pizza {
  constructor(pizzaSize) {
    this._size = pizzaSize;
    this._crust = "original";
  }
  getCrust() {
    return this._crust;
  }
  setCrust(pizzaCrust) {
    return this._crust(pizzaCrust);
  }
} */

/* class SpecialityPizza extends Pizza {
  constructor(pizzaSize) {
    super(pizzaSize);
    this.type = "The works";
  }
  slice() {
    console.log(`Our ${this.type} ${this.size} pizza has a 8 slices.`);
  }
}
const mySpeciality = new SpecialityPizza("medium");
mySpeciality.slice();
 */

// since we can assign parameter value outside the class we solve this  promblem using function

/* // Factory function
function pizzaFactory(pizzaSize) {
  const crust = "original";
  const size = pizzaSize;
  return {
    bake: () => console.log(`Baking a ${size} ${crust} crust pizza`),
  };
}
const myPizza = pizzaFactory("small");
myPizza.bake(); */

class Pizza {
  crust = "original";
  #sauce = "traditional";

  constructor(pizzaSize) {
    this.size = pizzaSize;
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    return this.crust(pizzaCrust);
  }
  hereYouGo() {
    console.log(
      `Here's your ${this.crust} ${this.#sauce} sauce ${this.size} pizza`
    );
  }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.getCrust());
//console.log(myPizza.#sauce);
