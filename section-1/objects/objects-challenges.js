const accessName = person => {
  // given a person object of the form { name: 'Bob', age: 42 }
  // should access the name value to return 'Bob'
};

const accessObject = (obj, key) => {
  // should access the value in an obj given a key
};

const checkHasProperty = (obj, key) => {
  // should check if an obj has a key-value pair
  // this function should return a boolean
};

const removeName = person => {
  // remove the name property from a person
};

const removeProperty = (obj, key) => {
  // remove the key value pair from an object
};

const addProperty = (obj, keyValuePair) => {
  // keyValuePair is an array with a key and a value
  // e.g. ["name","mitch"]
  // use this pair to add the key value pair to a new obj with all the properties of the old obj
  // addProperty({job: 'teacher'},['name','mitch']) // should return {job: 'teacher', name: 'mitch }
};

module.exports = {
  accessName,
  accessObject,
  checkHasProperty,
  removeName,
  removeProperty,
  addProperty,
};
