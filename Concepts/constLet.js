const a = 3;
// "a" is read-only
// Can't a = 4;

// Mutation is possible
const user = {name: 'Humberto'};
user.name = 'Bob';

// Local variable
function test(x) {
  let y = 2;

  if(x>5) {
    let y = 4;
    console.log(x, y);
  }
}

// not defined: console.log(y);
test(10)