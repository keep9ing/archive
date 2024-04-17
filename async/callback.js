'use strict';

// JavaScript is synchronous. 
// Execute the code block in order after hoisting.
// hoisting: var, function declaration

console.log('1');
// setTimeout(function () {
//   console.log('2');
// }, 1000);
//  callback function - arrow function
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
function printImmediately(print) {
  print();
}

printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000); 

// Callback hell example
class UserStorage {
  loginUser(id, password, onSuccess,onError) {
    setTimeout(() => {
      if (
        (id === 'jane' && password === 'cool') ||
        (id === 'guhee' && password === 'pic')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'jane') {
        onSuccess({ name: 'jane', role: 'admin'});
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter yoer password');
userStorage.loginUser(
  id, 
  password, 
  user => {
    userStorage.getRoles(
      user, 
      userWidtRole => {
        alert(`Hello ${userWidtRole.name}, you have a ${userWidtRole.role} role`)
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error)
  }
)