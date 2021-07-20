import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

//--------------------------------auth-operations-------------------------------
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const fetchSignUp = credentials => axios.post('/users/signup', credentials);

const fetchLogin = credentials => axios.post('/users/login', credentials);

const fetchLogout = () => axios.post('/users/logout');

const fetchCurrent = () => axios.get('/users/current');

//---------------------------contacts-operation----------------------------------

const fetchGetContacts = () => axios.get('/contacts');

const fetchPostContacts = contact => axios.post('/contacts', contact);

const fetchDeleteContacts = id => axios.delete(`/contacts/${id}`);

export {
  token,
  fetchSignUp,
  fetchLogin,
  fetchLogout,
  fetchCurrent,
  fetchGetContacts,
  fetchPostContacts,
  fetchDeleteContacts,
};
