const accessName = (person) => {
  // given a person object of the form { name: 'Bob', age: 42 }
  // should access the name value to return 'Bob'
  return person.name;
};

const accessObject = (obj, key) => {
  // should access the value in an obj given a key
  return obj[key];
};

const checkHasProperty = (obj, key) => {
  // should check if an obj has a key-value pair
  // this function should return a boolean
  // return obj.hasOwnProperty(key);
  return obj.hasOwnProperty(key);
};

const removeName = (person) => {
  // remove the name property from a person
  delete person.name;
  return person;
};

const removeProperty = (obj, key) => {
  // remove the key value pair from an object
  delete obj[key];
  return obj;
};

const addProperty = (obj, keyValuePair) => {
  // keyValuePair is an array with a key and a value
  // e.g. ["name","mitch"]
  // use this pair to add the key value pair to a new obj with all the properties of the old obj
  // addProperty({job: 'teacher'},['name','mitch']) // should return {job: 'teacher', name: 'mitch }
  if (!keyValuePair) return { ...obj };
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
};

module.exports = {
  accessName,
  accessObject,
  checkHasProperty,
  removeName,
  removeProperty,
  addProperty,
};
