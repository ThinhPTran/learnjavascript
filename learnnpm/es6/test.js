"use strict";

// es6 feature: block-scoped "let" declaration
const sentences = [
    { subject: "Javascript", verb: "is", object: "great"},
    { subject: "Elephants", verb: "are", object: "large"},
];

// es6 feature: object destructuring
function say({ subject, verb, object}) {
    // es6 feature: template strings
    console.log(`${subject} ${verb} ${object}`);
}

// es6 feature: for..of
for(let s of sentences) {
    say(s);
}

const small = Number.EPSILON;
const bigInt = Number.MAX_SAFE_INTEGER;
const minInt = Number.MIN_SAFE_INTEGER;
const max = Number.MAX_VALUE;
const min = Number.MIN_VALUE;
const nInf = Number.NEGATIVE_INFINITY;
const nan = Number.NaN;
const inf = Number.POSITIVE_INFINITY;

console.log(`"small: " ${small}`);
console.log(`"bigInt: " ${bigInt}`);
console.log(`"minInt: " ${minInt}`);
console.log(`"max: " ${max}`);
console.log(`"min: " ${min}`);
console.log(`"nInf: " ${nInf}`);
console.log(`"nan: " ${nan}`);
console.log(`"inf: " ${inf}`);

const obj = {};
obj.color = "yellow";

console.log(`"obj.size: " ${obj.size}`);
console.log(`"obj.color: " ${obj.color}`);

const sam1 = {
  name: "Sam",
  age: 4,
};

const sam2 = { name: "Sam", age: 4 };

const sam3 = {
  name: "Sam",
  classification: {
    kingdom: "Anamalia",
    phylum: "chordata",
    class: "Mamalia",
    order: "Carnivoria",
    family: "Felidae",
    subfamily: "Felinae",
    genus: "Felis",
    species: "catus",
  },
};







