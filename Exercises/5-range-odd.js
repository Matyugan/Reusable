"use strict";

const rangeOdd = (start, end) => {
  const items = [];

  for (let index = start; index <= end; index++) {
    if (index % 2 === 0) items.push(index);
  }

  return items;
};

module.exports = { rangeOdd };
