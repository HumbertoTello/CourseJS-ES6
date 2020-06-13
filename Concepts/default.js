function sum(a = 3, b = 4) {
  return a + b;
}

const sum2 = (a = 3, b = 4) => a + b;

console.log(sum(1));
console.log(sum());
console.log(sum2());