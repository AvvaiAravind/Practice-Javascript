"use strict";
/* const variable = "dave";
console.log(variable); */

//syntax error
//Object..create();

// creating error
/* const myName = "joe";
myName = "dave"; */

const creatingError = () => {
  let i = 1;
  while (i <= 5) {
    try {
      /* const myName = "dave";
    myName = "suresh"; */

      if (i % 2 !== 0) {
        throw new Error("Odd number");
      }
      console.log("Even number");
    } catch (error) {
      console.error(error.stack);
    } finally {
      console.log("....finally");
      i++;
    }
  }
};

/* function customError(message) {
  this.message = message;
  this.name = "customError";
  this.stack = `${this.name} ${this.message}`;
} */
creatingError();
