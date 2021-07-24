import React from 'react';

import s from './Views.module.css';

const HomeView = () => (
  <div className={s.HomeContainer}>
    <h1 className={s.HomeTitle}>Phonebook </h1>

    <article className={s.HomeArticle}>
      <p className={s.HomeArticleDescription}>
        Used to dream about this stuff. Now we get to build it. It's pretty
        great.
      </p>
      <span className={s.HomeArticleSpan}>
        Steven Paul Jobs, Apple Worldwide Developers Conference (June 2004)
      </span>
    </article>
  </div>
);

export default HomeView;
