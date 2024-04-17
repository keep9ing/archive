// Callback hell example
class UserStorage {
  async loginUser(id, password) {
    await new Promise(resolve => setTimeout(resolve, 2000));

    if (id === 'jane' && password === 'cool' || id === 'guhee' && password === 'pic') {
      return id;
    } else {
      throw new Error('not found');
    }
  }

  async getRoles(user) {
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (user === 'jane') {
      return { name: 'jane', role: 'admin' };
    } else {
      throw new Error('no access');
    }
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter yoer password');

// userStorage.loginUser(id, password)
//   // .then(user => userStorage.getRoles(user))
//   .then(userStorage.getRoles)
//   .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
//   .catch(console.log);

  // code from Gemini 
  (async () => {
    try {
      const user = await userStorage.loginUser(id, password);
      const userWithRole = await userStorage.getRoles(user);
      alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  })();

