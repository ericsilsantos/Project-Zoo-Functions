const data = require('../data/zoo_data');

const { species } = data;

function getName(animals, sorted, sex) {
  if (sex) {
    const filterResidents = animals.residents.filter((resident) => resident.sex === sex);
    if (sorted === true) {
      return { [animals.name]: filterResidents.map((resident) => resident.name).sort() };
    }
    return { [animals.name]: filterResidents.map((resident) => resident.name) };
  }
  if (sorted === true) {
    return { [animals.name]: animals.residents.map((resident) => resident.name).sort() };
  }
  return { [animals.name]: animals.residents.map((resident) => resident.name) };
}

function mapWithoutParameter() {
  return {
    NE: species.filter((specie) => specie.location === 'NE').map((specie) => specie.name),
    NW: species.filter((specie) => specie.location === 'NW').map((specie) => specie.name),
    SE: species.filter((specie) => specie.location === 'SE').map((specie) => specie.name),
    SW: species.filter((specie) => specie.location === 'SW').map((specie) => specie.name),
  };
}

function mapIncludeNames(sorted, sex) {
  return {
    NE: species.filter((specie) => specie.location === 'NE')
      .map((animal) => getName(animal, sorted, sex)),
    NW: species.filter((specie) => specie.location === 'NW')
      .map((animal) => getName(animal, sorted, sex)),
    SE: species.filter((specie) => specie.location === 'SE')
      .map((animal) => getName(animal, sorted, sex)),
    SW: species.filter((specie) => specie.location === 'SW')
      .map((animal) => getName(animal, sorted, sex)),
  };
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return mapWithoutParameter();
  }
  if (options.sorted) {
    return mapIncludeNames(options.sorted, options.sex);
  }
  if (options.sex) {
    return mapIncludeNames(false, options.sex);
  }
  return mapIncludeNames();
}

module.exports = getAnimalMap;
