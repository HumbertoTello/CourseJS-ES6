const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('OK') }, 2000);
})

// tradicional
// minhaPromise()
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {

//   });

// async/await
async function executaPromise() {
  const response = await minhaPromise();

  console.log(response);
  
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
}

executaPromise(); 

const executaPromise2 = async() => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
}

executaPromise2();