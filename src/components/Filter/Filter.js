import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import s from './Filter.module.css';

import { changeFilter, getFilter } from 'redux/contacts';
// import { changeFilter } from 'redux/contacts/contacts-actions';
// import { getFilter } from 'redux/contacts/contacts-selectors';

const filterInputId = uuidv4();

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <label htmlFor={filterInputId}>
      <span className={s.span}>Find contacts by name and number</span>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={onChangeFilter}
        id={filterInputId}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

const mapStateToProps = state => ({
  filter: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
