import React from 'react';
import styles from './BadResponse.module.css';
const BadResponse = () => (
  <div className={styles.responseWrapper}>
    <h2>Currently the server isn{'\''}t available</h2>
    <img src="https://content.presentermedia.com/files/clipart/00021000/21658/sad_broken_computer_800_wht.jpg" alt="sad computer" />
  </div>
);

export default BadResponse;
