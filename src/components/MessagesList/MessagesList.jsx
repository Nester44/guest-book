/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Message from './Message/Message';
import styles from './MessagesList.module.css';
import { getMessages } from '../../redux/app-reducer';


const MessagesList = (props) => {
  useEffect(() => {
    props.getMessages();
  }, []);

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

export default connect(mapStateToProps, { getMessages })(MessagesList);
