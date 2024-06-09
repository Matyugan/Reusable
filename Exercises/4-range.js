"use strict";

const range = () => {
  const items = [];

  for (let index = start; index <= end; index++) {
    items.push(index);
  }

  return items;
};

module.exports = { range };
