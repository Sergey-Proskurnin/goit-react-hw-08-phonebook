import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import s from 'components/Navigation/Navigation.module.css';
import { getIsAuthenticated } from 'redux/auth';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" exact className={s.link} activeClassName="NavLink--active">
      Home
    </NavLink>

    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        className={s.link}
        activeClassName="NavLink--active"
      >
        Contacts
      </NavLink>
    )}
  </nav>
);
const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
