// Callback hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (
              (id === 'jane' && password === 'cool') ||
              (id === 'guhee' && password === 'pic')
            ) {
              resolve(id);
            } else {
              reject(new Error('not found'));
            }
          }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'jane') {
          resolve({ name: 'jane', role: 'admin'});
        } else {
         reject(new Error('no access'));
        }
      }, 1000);
    })
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter yoer password');
// userStorage.loginUser(
//   id, 
//   password, 
//   user => {
//     userStorage.getRoles(
//       user, 
//       userWidtRole => {
//         alert(`Hello ${userWidtRole.name}, you have a ${userWidtRole.role} role`)
//       },
//       error => {
//         console.log(error);
//       }
//     );
//   },
//   error => {
//     console.log(error)
//   }
// )

userStorage.loginUser(id, password)
  // .then(user => userStorage.getRoles(user))
  .then(userStorage.getRoles)
  .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);