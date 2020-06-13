"use strict";

var name = 'Humberto';
var age = '22'; //console.log('Oi, meu nome é ' + name + ' e eu tenho ' + age + ' anos!');

console.log("Oi, meu nome \xE9 ".concat(name, " e eu tenho ").concat(age, " anos"));
var user = {
  name: name,
  age: age
};
console.log(user);
