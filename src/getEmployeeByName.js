const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((em) => em.firstName === employeeName || em.lastName === employeeName);
}
module.exports = getEmployeeByName;
