const incrementNums = (list, increment) => {
  return list.map((li) => (increment ? (li += increment) : li));
};

const multiplyNums = (list, increment) => {
  return list.map((li) => (increment ? (li *= increment) : li));
};

const extractCatNames = (cats) => {
  return cats.map((cat) => cat.name);
};

const getFullNames = (people) => {
  return people.map((person) => `${person.firstName + " " + person.surName}`);
};

const getObjectProperties = (objs, key) => {
  return objs.map((obj) => obj[key]);
};

module.exports = {
  incrementNums,
  multiplyNums,
  extractCatNames,
  getFullNames,
  getObjectProperties,
};
