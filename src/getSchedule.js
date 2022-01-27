const data = require('../data/zoo_data');

const { hours } = data;

const { species } = data;

function week(semana) {
  const horarioDaSemana = {};
  semana.forEach((dia) => {
    if (dia === 'Monday') {
      horarioDaSemana[dia] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      horarioDaSemana[dia] = {
        officeHour: `Open from ${hours[dia].open}am until ${hours[dia].close}pm`,
        exhibition: species.filter((specie) => specie.availability.includes(dia))
          .map((specie) => specie.name),
      };
    }
  });
  return horarioDaSemana;
}

function getDay(day) {
  if (day === 'Monday') {
    return { [day]: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  return {
    [day]: {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: species.filter((specie) => specie.availability.includes(day))
        .map((specie) => specie.name),
    },
  };
}

function getSpeciesWeek(animal) {
  return species.find((specie) => specie.name === animal).availability;
}

function getSchedule(scheduleTarget) {
  const nameSpecies = species.map((specie) => specie.name);
  const dayOfWeek = Object.keys(hours);
  const booleano = (!nameSpecies.includes(scheduleTarget) && !dayOfWeek.includes(scheduleTarget));
  if (!scheduleTarget || booleano) {
    return week(dayOfWeek);
  }
  if (dayOfWeek.includes(scheduleTarget)) {
    return getDay(scheduleTarget);
  }
  return getSpeciesWeek(scheduleTarget);
}
module.exports = getSchedule;
