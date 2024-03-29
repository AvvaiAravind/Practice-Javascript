// basic object

const myObject = {
  name: "Dave",
  Hobbies: ["eat", "sleep", "code"],
  hello: function () {
    console.log("Hello!");
  },
};
console.log(myObject);
console.log(myObject.name);
myObject.hello();
console.log(typeof myObject);

const sendJSON = JSON.stringify(myObject);
console.log(sendJSON);
console.log(typeof sendJSON);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);
