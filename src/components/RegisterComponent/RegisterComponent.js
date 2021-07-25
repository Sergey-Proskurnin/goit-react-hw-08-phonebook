import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import s from './RegisterComponent.module.css';

const RegisterComponent = ({
  handleChange,
  name,
  email,
  password,
  handleSubmit,
}) => {
  return (
    <div className={s.RegisterSection}>
      <h1 className={s.RegisterTitle}>Registration</h1>
      <FormControl className={s.RegisterFormControl}>
        <TextField
          style={{ marginTop: '20px' }}
          onChange={handleChange}
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
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="For example 'email@gmail.com'"
          required
          autoComplete="off"
          value={email}
          id="2"
          label="Enter your email"
          variant="outlined"
        />
        <TextField
          style={{ marginTop: '20px' }}
          onChange={handleChange}
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
          onClick={handleSubmit}
        >
          Сheck in
        </Button>
      </FormControl>
    </div>
  );
};

export default RegisterComponent;
