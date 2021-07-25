import React from 'react';
import { CSSTransition } from 'react-transition-group';

import s from './Container.module.css';
import sAt from 'helpers/animation/animationTitle.module.css';

const Container = ({ children, title }) => (
  <div className={s.container}>
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames={sAt}
      unmountOnExit
    >
      <h1 className={s.title}>{title}</h1>
    </CSSTransition>
    {children}
  </div>
);

export default Container;
