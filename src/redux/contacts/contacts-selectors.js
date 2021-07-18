import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

const sortAllContact = createSelector([getAllContacts], contacts => {
  return contacts.slice().sort((a, b) => b.id - a.id);
});
const getVisibleContacts = createSelector(
  [sortAllContact, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(filter),
    );
  },
);

export {
  getLoading,
  getFilter,
  getVisibleContacts,
  getAllContacts,
  sortAllContact,
};
