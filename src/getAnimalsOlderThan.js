const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specieIdentificada = data.species.find((specie) => specie.name === animal);
  return specieIdentificada.residents.every((individuo) => individuo.age >= age);
}
module.exports = getAnimalsOlderThan;
