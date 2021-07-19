import React from 'react';
import { connect } from 'react-redux';

import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import s from 'components/AppBar/AppBar.module.css';
import { getIsAuthenticated } from 'redux/auth';

const AppBar = ({ isAuthenticated }) => (
  <header className={s.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
