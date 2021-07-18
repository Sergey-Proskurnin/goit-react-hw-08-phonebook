import React from 'react';
import s from './Container.module.css';

const Container = ({ children, title }) => (
  <div className={s.container}>
    <h1 className={s.title}>{title}</h1>
    {children}
  </div>
);

export default Container;
