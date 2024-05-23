const addressLat = 5;
const addressLong = 10;
const positionLat = 15;
const positionLong = 10;

console.log(Math.round(Math.sqrt(((positionLat - addressLat) ** 2 + (positionLong - addressLong) ** 2) ** 0.5)));