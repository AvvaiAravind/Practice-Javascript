//functions
function sum(num1, num2) {
  console.log(num1);
  console.log(num2);
  if (num2 === undefined) {
    return num1 + num1;
  }
  return num1 + num2;
}
console.log(sum(2));

/* function getEmailAddress(email) {
  return email.slice(0, email.indexOf("@"));
}
console.log(getEmailAddress("nadhinipriya@gamil.com")); */

/* const getEmailAddress = function (email) {
  return email.slice(0, email.indexOf("@"));
};
console.log(getEmailAddress("nadhinipriya@gamil.com")); */
const getEmailAddress = (email) => {
  return email.slice(0, email.indexOf("@"));
};
console.log(getEmailAddress("nadhinipriya@gamil.com"));

const toProperCase = (anyName) => {
  return anyName.charAt(0).toUpperCase() + anyName.slice(1).toLowerCase();
};
console.log(toProperCase("dAvEoppii;j;;;kkkkkkjjjJJJJJJJKDA"));
