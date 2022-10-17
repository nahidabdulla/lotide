const findKeyByValue = require('../findKeyByValue');
const assertEqual = require('../assertEqual');


const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That 70s Show"), undefined);

const user = {
  name: "Jonathan",
  age: "24",
  occupation: "Web Developer"
};

assertEqual(findKeyByValue(user, "Jonathan"), "name");
assertEqual(findKeyByValue(user, "soccer"), undefined);