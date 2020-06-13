// Transforme os seguintes trechos de código utilizando async/await:

// Funão delay aciona o.then após 1s
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
// function umPorSegundo() {
//   delay().then(() => {
//     console.log('1s');
//     delay().then(() => {
//       console.log('2s');
//       delay().then(() => {
//         console.log('3s');
//       });
//     })
//   });
// }
// umPorSegundo();
import axios from 'axios';

const delay = (s) => new Promise(resolve => setTimeout(resolve(`${s}s`), 1000));
async function umPorSegundo() {
  console.log(await delay(1));
  console.log(await delay(2));
  console.log(await delay(3));
}
umPorSegundo();

// import axios from 'axios';
// function getUserFromGithub(user) {
//   axios.get(`https://api.github.com/users/${user}`)
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(err => {
//       console.log('Usuário não existe');
//     })
// }
// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');


async function getUserFromGithub(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`)
    console.log(response);
  } catch (err) {
    console.warn('Usuário não existe')
  }
}


getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

// class Github {
//   static getRepositories(repo) {
//     axios.get(`https://api.github.com/repos/${repo}`)
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(err => {
//         console.log('Repositório não existe');
//       })
//   }
// }
// Github.getRepositories('rocketseat/rocketseat.com.br');
// Github.getRepositories('rocketseat/dslkvmskv');

class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`)
      console.log(response);
    } catch (err) {
      console.log('Repositório não existe')
    }
  }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

// const buscaUsuario = usuario => {
//   axios.get(`https://api.github.com/users/${user}`)
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(err => {
//       console.log('Usuário não existe');
//     });
// }
// buscaUsuario('diego3g');

const buscaUsuario = usuario => {
  try {
    const response = axios.get(`https://api.github.com/users/${user}`)
    console.log(response.data);
  } catch (err) {
    console.log('Usuário não existe')
  }
}
buscaUsuario('diego3g');