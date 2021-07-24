import { createAsyncThunk } from '@reduxjs/toolkit';
import alert from 'helpers/alert';

import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

import {
  fetchGetContacts,
  fetchPostContacts,
  fetchDeleteContacts,
} from 'services/fetchApi';

//--------------------------------createAsyncThunk------------------------
const fetchContacts = createAsyncThunk('contacts/fetchContact', async () => {
  const { data } = await fetchGetContacts();
  return data;
});

// --------------------------------then-cath----------------------------------
const addContact = contact => dispatch => {
  dispatch(addContactRequest());
  fetchPostContacts(contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => {
      dispatch(addContactError(error.message));
      alert(`Error server: ${error.message}`);
    });
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  fetchDeleteContacts(id)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => {
      dispatch(deleteContactError(error.message));
      alert(`Error server: ${error.message}`);
    });
};

export { addContact, deleteContact, fetchContacts };
