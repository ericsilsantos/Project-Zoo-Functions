const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const totalEntrants = {
    adult: 0,
    child: 0,
    senior: 0,
  };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      totalEntrants.child += 1;
    } else if (entrant.age >= 18 && entrant.age < 50) {
      totalEntrants.adult += 1;
    } else {
      totalEntrants.senior += 1;
    }
  });
  return totalEntrants;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const totalPeoples = countEntrants(entrants);
  const payAdult = totalPeoples.adult * prices.adult;
  const payChild = totalPeoples.child * prices.child;
  const paySenior = totalPeoples.senior * prices.senior;
  return payAdult + payChild + paySenior;
}

module.exports = { calculateEntry, countEntrants };
