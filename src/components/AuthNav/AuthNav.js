import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './AuthNav.module.css';

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      className={s.link}
      activeClassName="NavLink--active"
    >
      Сheck in
    </NavLink>
    <NavLink
      to="/login"
      exact
      className={s.link}
      activeClassName="NavLink--active"
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
