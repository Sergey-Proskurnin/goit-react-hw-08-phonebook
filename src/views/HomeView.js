import React from 'react';

import bgiHome from 'images/sunset-london-england.jpg';
import s from './Views.module.css';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'url(images/sunset-london-england.jpg)',
  },
  title: {
    fontWeight: 500,
    fontSize: 88,
    textAlign: 'center',
  },
  bgi: {
    backgroundImage: { bgiHome },
  },
};

const HomeView = () => (
  <div className={s.HomeContainer}>
    <h1 style={styles.title}>
      Phonebook{' '}
      {/* <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span> */}
    </h1>
  </div>
);

export default HomeView;
