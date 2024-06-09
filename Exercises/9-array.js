"use strict";

const phonebook = [
  {
    name: "Marcus",
    phone: "+380445554433",
  },
  {
    name: "John",
    phone: "+380445554433",
  },
  {
    name: "George",
    phone: "+380445554433",
  },
];

const findPhoneByName = (name) => {
  for (let index = 0; index < phonebook.length; index++) {
    if (name === phonebook[index]) return phonebook[index];
  }
};

module.exports = { phonebook, findPhoneByName };
