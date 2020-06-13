const arr = [1, 3, 4, 5, 6]

const newArr = arr.map(item => item * 2);
console.log(newArr);

const teste = () => 'teste';

const teste2 = () => {
  return [2, 3]
}

const obj = () => ({ name: 'Humberto' });

console.log(teste());
console.log(teste2());
console.log(obj());