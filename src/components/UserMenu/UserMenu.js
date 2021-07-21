import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { getUserName, logOut } from 'redux/auth';
import defaultAvatar from 'images/guardsman.png';
import s from './UserMenu.module.css';

const UserMenu = ({ name, avatar, onLogout }) => (
  <div className={s.container}>
    <div>
      <img src={avatar} alt="Avatar" width="57" className={s.avatar} />
    </div>
    <span className={s.name}>
      Welcome, {name.slice(0, 1).toUpperCase()}
      {name.slice(1)}
    </span>
    <Button
      type="button"
      onClick={onLogout}
      style={{ marginTop: '5px' }}
      variant="contained"
      color="primary"
    >
      Logout
    </Button>
  </div>
);
const mapStateToProps = state => ({
  name: getUserName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
