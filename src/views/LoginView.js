import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { logIn } from 'redux/auth';

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
        <div className={s.LoginSection}>
          <h1 className={s.LoginTitle}>Login</h1>
          <FormControl className={s.LoginFormControl}>
            <TextField
              style={{ marginTop: '20px' }}
              onChange={this.handleChange}
              type="email"
              name="email"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              placeholder="For example 'email@gmail.com'"
              required
              autoComplete="off"
              value={email}
              color="secondary"
              id="1"
              label="Enter your email"
              variant="outlined"
            />
            <TextField
              style={{ marginTop: '20px' }}
              onChange={this.handleChange}
              type="password"
              name="password"
              required
              value={password}
              id="2"
              label="Enter your password"
              variant="outlined"
            />
            <Button
              type="submit"
              style={{ marginTop: '20px' }}
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              Sign in
            </Button>
          </FormControl>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
