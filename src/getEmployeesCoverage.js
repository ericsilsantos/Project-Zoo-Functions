const data = require('../data/zoo_data');

const { employees } = data;

const { species } = data;

function getNameAndLocacion(speciesIds) {
  const nameAndLocacion = {
    location: [],
    name: [],
  };
  speciesIds.forEach((id, index) => {
    nameAndLocacion.location[index] = species.find((specie) => specie.id === id).location;
    nameAndLocacion.name[index] = species.find((specie) => specie.id === id).name;
  });
  return nameAndLocacion;
}

function noParam() {
  const employeesCoverage = [];
  employees.forEach((employee, index) => {
    const nameAndLocacion = getNameAndLocacion(employee.responsibleFor);
    employeesCoverage[index] = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: nameAndLocacion.name,
      locations: nameAndLocacion.location,
    };
  });
  return employeesCoverage;
}

function getEmployess(employee) {
  const nameAndLocacion = getNameAndLocacion(employee.responsibleFor);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: nameAndLocacion.name,
    locations: nameAndLocacion.location,
  };
}

function getEmployeesCoverage(idEmployee) {
  if (!idEmployee) {
    return noParam();
  }
  const emp = employees.find((employee) => employee.id === idEmployee.id
    || employee.firstName === idEmployee.name
    || employee.lastName === idEmployee.name);
  if (emp === undefined) {
    throw new Error('Informações inválidas');
  }
  return getEmployess(emp);
}

module.exports = getEmployeesCoverage;
