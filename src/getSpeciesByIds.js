const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const arraySpecies = data.species.filter((specie) => ids.find((id) => specie.id === id));
  return arraySpecies;
}
module.exports = getSpeciesByIds;
