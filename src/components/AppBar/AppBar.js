import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import s from 'components/AppBar/AppBar.module.css';
import { getIsAuthenticated } from 'redux/auth';
import headerStyles from './headerAppBar.module.css';
// import navigationStyle from './navigationAppBar.module.css';

const AppBar = ({ isAuthenticated }) => (
  <CSSTransition
    in={true}
    appear={true}
    timeout={500}
    classNames={headerStyles}
    unmountOnExit
  >
    <header className={s.header}>
      <Navigation />

      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  </CSSTransition>
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
