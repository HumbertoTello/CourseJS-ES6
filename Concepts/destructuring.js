const user = {
  name: 'Humberto',
  age: 22,
  address: {
    city: 'Campinas',
    state: 'SP'
  }
};

// const name = user.name;
// const age = user.age;
// const city = user.city.address;

const { name, age, address: { city }} = user;

console.log(name);
console.log(age);
console.log(city);

function showName({ name, age }) {
  console.log(name, age);
}

showName(user);