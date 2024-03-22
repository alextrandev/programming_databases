"use strict";

const persons = require("./person.json");

const search = (searchKey, value) => {
  //error checking missing

  const found = [];

  for (const person of persons) {
    if (person[searchKey] == value) {
      found.push(person);
    }
  }

  return found;
};

console.log(search("firstname", "Mary"));
