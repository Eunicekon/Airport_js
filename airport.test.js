// UNIT TEST
// to run = npm test
const { test, expect } = require('@jest/globals');
const Airport = require('./airport');
const Plane = require('./plane');

beforeEach(() => {
  let plane = new Plane;
});

test('get plane location', () => {
  expect(plane.getLocation()).toBe("somewhere");
});

test('instruct a plane to take off from an airport', () => {
  plane.takeOff();
  expect(plane.getLocation()).toBe("in air");
});

test('where is the plane, confirm that it is no longer in the airport', () => {
  expect(airport.location("x")).toBe("x");
});