/* eslint-disable react/prop-types */
import React from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import styles from './MessageForm.module.css';
import { sendMessage } from '../../redux/app-reducer';
import { required } from '../../util/validators';


const MessageForm = (props) => {
  const onSubmit = (data, form) => {
    props.sendMessage(data);
    form.reset();
  };
  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form className={styles.form} onSubmit={ handleSubmit }>
            <Field
              validate= {required }
              name='name'
              placeholder='Enter your name'
              component={'input'}
            />
            <Field
              validate= {required }
              name='message'
              placeholder='Enter your message'
              component={'input'}
              render={(input, meta) => (
                <div>
                  <label>Name</label>
                  <input {...input} type="text" placeholder="First Name" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            />
            <button type='submit'>Send message</button>
          </form>
        )}
      />
    </div>
  );
};



export default connect(null, { sendMessage })(MessageForm);
