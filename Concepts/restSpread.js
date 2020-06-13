// rest
const user = {
  name: 'Humberto',
  age: 22,
  university: 'USP'
};

const { name, ...rest } = user;

console.log(name);
console.log(rest);

const arr = [1, 2, 3, 4];

const [ a, b, ...c ] = arr;

console.log(a);
console.log(b);
console.log(c);

function sum(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(sum(1, 3, 4));

function sum2(a, b, ...params) {
  return params;
}

console.log(sum2(1, 3, 4, 5, 6));

// spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2 ];
console.log(arr3);

const user1 = {
  name: 'Humberto',
  age: 22,
  university: 'USP'
};

const user2 = { ...user1, name: 'Fulano' };
console.log(user2);