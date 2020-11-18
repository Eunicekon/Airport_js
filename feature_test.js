// FEATURE TEST
// to run = node nameOfFeatureTestFile
const Airport = require('./airport');

airport = new Airport;

console.log("Does docking reduce capacity");
console.log(airport.capacity);
console.log("expect capacity to reduce by 1");
console.log(airport.docking());
