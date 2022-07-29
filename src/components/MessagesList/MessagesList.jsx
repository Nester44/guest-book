/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Message from './Message/Message';
import styles from './MessagesList.module.css';
import { getMessages } from '../../redux/app-reducer';
import Loader from '../Loader/Loader';


const MessagesList = (props) => {
  useEffect(() => {
    props.getMessages();
  }, []);

  if (!props.isInitialized) return <Loader />;

  const messagesElements = props.messages.map(
    (m) => <Message key={m._id} name={m.name} message={m.message} />
  );
  return (
    <div className={styles.messageListContainer} >
      <h2 className={styles.title} >MessagesList</h2>
      <div className={styles.messagesList}>
        { messagesElements.length > 0 ?
          messagesElements :
          'There are no messages yet'
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  messages: state.app.messages,
  isInitialized: state.app.isInitialized,
});

export default connect(mapStateToProps, { getMessages })(MessagesList);
