import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { register } from 'redux/auth';
import RegisterComponent from 'components/RegisterComponent';

import s from './Views.module.css';
import sAr from 'helpers/animation/animationRight.module.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className={s.RegisterContainer}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={sAr}
          unmountOnExit
        >
          <RegisterComponent
            handleChange={this.handleChange}
            name={name}
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
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
