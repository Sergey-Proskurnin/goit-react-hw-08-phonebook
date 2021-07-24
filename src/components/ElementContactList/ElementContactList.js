import React from 'react';
import PropTypes from 'prop-types';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

import s from './ElementContactList.module.css';

const ElementContactList = ({ contacts, deleteContact }) => {
  return contacts.map(({ name, number, id }) => {
    return (
      <li className={s.item} key={id}>
        <a className={s.link} href={`tel:${number}`}>
          <span className={s.span}>
            <ContactPhoneIcon color="primary" fontSize="large" />
          </span>
          <span className={s.spanLink}>
            {name}: {number}
          </span>
        </a>
        <button
          type="button"
          className={s.btnList}
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    );
  });
};

ElementContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};

export default ElementContactList;
