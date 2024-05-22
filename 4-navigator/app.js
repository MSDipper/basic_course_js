const addressLat = 5;
const addressLong = 10;
const positionLat = 5;
const positionLong = 10;

console.log(Math.round(((addressLong - addressLat) ** 2 + (positionLong - positionLat) ** 2) ** 0.5));