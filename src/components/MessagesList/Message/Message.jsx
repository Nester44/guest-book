/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Message.module.css';

const Message = (props) => (
  <div className={styles.messageItem}>
    <h3 className={styles.name}>{props.name}</h3>
    {props.message}
  </div>
);


export default Message;

