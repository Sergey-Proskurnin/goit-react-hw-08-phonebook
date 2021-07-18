import React from 'react';
import PropTypes from 'prop-types';

import s from './ElementContactList.module.css';

const ElementContactList = ({ contacts, deleteContact }) => {
  return contacts.map(({ name, number, id }) => {
    return (
      <li className={s.item} key={id}>
        <span className={s.span}></span>
        {name}: {number}
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
