"use strict";

const fn = () => {
  const first = {
    name: "Maxim",
  };
  let second = {
    name: "Maxim",
  };

  first.name = "Piter";
  second.name = "John";

  first = { age: 30 };
  second = { age: 30 };
};

module.exports = { fn };
