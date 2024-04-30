import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}
const instance = createInstance();

// const instance = axios.create({
//   baseURL: process.env.VUE_APP_API_URL,
//   headers: {
//     Authorization: store.state.token,
//   },
// });

// const newInstance = setInterceptors(instance);
// 여기까지를 묶어서 하나의 펑션으로

// axios.post('http://localhost:3000/signup')
// instance.interceptors.request.user();

function registerUser(userData) {
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
