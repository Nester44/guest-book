/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Message from './Message/Message';
import styles from './MessagesList.module.css';


const MessagesList = (props) => {
  const messagesElements = props.messages.map(
    (m) => <Message key={m.id} name={m.name} message={m.message} />
  );
  return (
    <div>
      <h2>MessagesList</h2>
      <div className={styles.messagesContainer}>{ messagesElements }</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  messages: state.app.messages,
});

export default connect(mapStateToProps)(MessagesList);
