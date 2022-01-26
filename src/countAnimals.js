const data = require('../data/zoo_data');

const { species } = data;

function totalAnimalsForSpecie(animal) {
  let contador = 0;
  species.forEach((specie) => {
    if (animal.specie === specie.name) {
      if (animal.sex) {
        contador = specie.residents.filter((resident) => resident.sex === animal.sex).length;
        return contador;
      }
      contador += specie.residents.length;
    }
  });
  return contador;
}

function countAnimals(animal) {
  if (!animal) {
    const objAnimals = {};
    species.forEach((specie) => {
      objAnimals[specie.name] = specie.residents.length;
    });
    return objAnimals;
  }
  return totalAnimalsForSpecie(animal);
}
// console.log(countAnimals())
module.exports = countAnimals;
