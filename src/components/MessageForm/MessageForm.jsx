/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import styles from './MessageForm.module.css';
import { sendMessage } from '../../redux/app-reducer';
import {
  required,
  notHTML,
  notLink,
  composeValidators
} from '../../util/validators';

const nameValidators = composeValidators(required, notHTML, notLink);
const messageValidators = composeValidators(required, notHTML);

const Input = ({ meta, input, ...props }) => {
  const isError = meta.error && meta.modified;
  return (
    <div className={styles.form__group}>
      <input
        className={
          isError ?
            styles.errorField + ' ' + styles.form__field :
            styles.form__field
        }
        {...input} {...props}
        type="text" placeholder="First Name" />
      <label className={styles.form__label}
        htmlFor={input.name} >
        {input.name}
      </label>
      { isError && <span
        className={styles.error} >{meta.error}
      </span>}
    </div>
  );
};

const MessageForm = (props) => {
  const onSubmit = (data, form) => {
    props.sendMessage(data);
    form.restart();
  };

  useEffect(() => {
    const listener = (event) => {
      if (event.code === 'Enter') {
        if (event.metaKey)
          onSubmit();
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, invalid }) => (
          <form className={styles.form} onSubmit={ handleSubmit }>
            <Field
              validate= {nameValidators }
              name='name'
              placeholder='Enter your name'
              component={Input}
              autoComplete='off'

            />
            <Field
              autoComplete='off'
              validate= {messageValidators }
              name='message'
              placeholder='Enter your message'
              component={Input}
            />
            <button className={styles.submitBtn}
              disabled={ invalid }
              type='submit'>Send message
            </button>
          </form>
        )}
      />
    </div>
  );
};



export default connect(null, { sendMessage })(MessageForm);
