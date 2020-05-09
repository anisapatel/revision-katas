const getExclaimed = (names) => {
  // should return an array of names that end in an !
  return names.filter((name) => name.endsWith("!"));
};

const getOldCats = (cats) => {
  // return an array of cats older than or equal to 8
  return cats.filter((cat) => cat.age >= 8);
};

const getRecentTitles = (films) => {
  return films.filter((film) => film.year > 2000);
  // gets films with a year of release after 2000
};

const getEvens = (nums) => {
  return nums.filter((num) => num % 2 === 0);
  // returns an array of all the even nums only
};

const getMultiples = (nums, multiple) => {
  return nums.filter((num) => num % multiple === 0);
  // returns an array of nums that are divisible by a given multiple
};

module.exports = {
  getExclaimed,
  getOldCats,
  getRecentTitles,
  getEvens,
  getMultiples,
};
