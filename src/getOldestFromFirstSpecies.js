const data = require('../data/zoo_data');

const { employees } = data;

const { species } = data;

function getOldestFromFirstSpecies(id) {
  const funcionario = employees.find((employee) => employee.id === id);
  const residents = (species
    .find((specie) => specie.id === funcionario.responsibleFor[0]).residents)
    .sort((rA, rB) => rB.age - rA.age);
  return [residents[0].name, residents[0].sex, residents[0].age];
}

module.exports = getOldestFromFirstSpecies;
