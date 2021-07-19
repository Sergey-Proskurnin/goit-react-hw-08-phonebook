import React from 'react';
import { connect } from 'react-redux';
import { getUserName, logOut } from 'redux/auth';
// import defaultAvatar from './default-avatar.png';
import s from './UserMenu.module.css';

const UserMenu = ({ name, onLogout }) => (
  <div className={s.container}>
    <img src="" alt="" width="32" className={s.avatar} />
    <span className={s.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);
const mapStateToProps = state => ({
  name: getUserName(state),
  //   avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
