import React from 'react';

import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

import s from './ContactContainer.module.css';

const ContactContainer = () => (
  <div className={s.contactContainer}>
    <Filter />
    <div className={s.contactList}>
      <ContactList />
    </div>
  </div>
);

export default ContactContainer;
