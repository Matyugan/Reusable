"use strict";

const average = (a, b) => (a + b) / 2;
const square = (x) => Math.pow(x, 2);
const cube = (x) => Math.pow(x, 3);

const calculate = () => {
  const items = [];
  for (let index = 0; index <= 9; index++) {
    items.push(average(square(index), cube(index)));
  }

  return items;
};

module.exports = { square, cube, average, calculate };
