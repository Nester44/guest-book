import React from 'react';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.loaderWrapper}>
    <div className={styles.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loader;
