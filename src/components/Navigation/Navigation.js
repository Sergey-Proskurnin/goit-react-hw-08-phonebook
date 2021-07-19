import React from 'react';
import { NavLink } from 'react-router-dom';
import s from 'components/Navigation/Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink to="/" exact className={s.link} activeClassName="NavLink--active">
      Home
    </NavLink>

    <NavLink
      to="/contacts"
      exact
      className={s.link}
      activeClassName="NavLink--active"
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
