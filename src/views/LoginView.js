import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { logIn } from 'redux/auth';
import LoginComponent from 'components/LoginComponent';

import sAl from 'helpers/animation/animationLeft.module.css';

import s from './Views.module.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className={s.LoginContainer}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={250}
          classNames={sAl}
          unmountOnExit
        >
          <LoginComponent
            handleChange={this.handleChange}
            email={email}
            password={password}
            handleSubmit={this.handleSubmit}
          />
        </CSSTransition>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
