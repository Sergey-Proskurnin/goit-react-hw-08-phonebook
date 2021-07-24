import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { register } from 'redux/auth';

import s from './Views.module.css';

// const styles = {
//   form: {
//     width: 320,
//   },
//   label: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginBottom: 15,
//   },
// };
const stylesFormControl = {
  display: 'flex',
  width: '300px',
  flexDirection: 'column',
  justifyContent: 'center',
  // margin: "0 auto",
  color: 'white',
};
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
        <div className={s.RegisterSection}>
          <h1 className={s.RegisterTitle}>Registration</h1>

          {/* <form
            onSubmit={this.handleSubmit}
            style={styles.form}
            autoComplete="off"
          >
            <label style={styles.label}>
              Имя
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </label>

            <label style={styles.label}>
              Почта
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>

            <label style={styles.label}>
              Пароль
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </label>

            <button type="submit">Зарегистрироваться</button>
          </form> */}

          <FormControl style={stylesFormControl}>
            <TextField
              style={{ marginTop: '20px' }}
              onChange={this.handleChange}
              type="text"
              name="name"
              placeholder="For example 'John'"
              required
              autoComplete="off"
              value={name}
              id="1"
              label="Enter your name"
              variant="outlined"
            />
            <TextField
              style={{ marginTop: '20px' }}
              onChange={this.handleChange}
              type="email"
              name="email"
              placeholder="For example 'email@gmail.com'"
              required
              autoComplete="off"
              value={email}
              // color="secondary"
              id="2"
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
              id="3"
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
              Сheck in
            </Button>
          </FormControl>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
  // onRegister: () => dispatch(register())
};

export default connect(null, mapDispatchToProps)(RegisterView);
