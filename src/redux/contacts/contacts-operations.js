import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  // fetchContactRequest,
  // fetchContactSuccess,
  // fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040';

//--------------------------------createAsyncThunk------------------------
const fetchContacts = createAsyncThunk('contacts/fetchContact', async () => {
  const { data } = await axios.get('/contacts');
  return data;
});

// ---------------------------async-await-------------------------
// const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactRequest());
//   try {
//     const { data } = await axios.get('/contacts');
//     dispatch(fetchContactSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactError(error));
//   }
// };

// -----------------then-cath----------------------------------
// const fetchContacts = () => dispatch => {
//   dispatch(fetchContactRequest());
//   axios
//     .get('/contacts')
//     .then(({ data }) => dispatch(fetchContactSuccess(data)))
//     .catch(error => dispatch(fetchContactError(error)));
// };
//----------------------------------------------------------------
const addContact = contact => dispatch => {
  dispatch(addContactRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

export { addContact, deleteContact, fetchContacts };
