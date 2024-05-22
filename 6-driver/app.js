const hasLicence = true;
const age = 18;
const isDrunk = false;

const res = (hasLicence && age >= 18 && !isDrunk) ? 'Может' : 'Не может'

console.log(`Может ли водитель водить машину? ${res}.`);