/* eslint-disable react/prop-types */
import React from 'react';
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
  const isError = meta.error && meta.touched;
  return (
    <div dataError={meta.error || ' '}
      className={styles.form__group + ' ' + styles.field}
    >
      <input
        className={styles.form__field}
        {...input} {...props}
        type="text" placeholder="First Name" />
      <label className={styles.form__label}
        htmlFor={input.name} >
        {input.name}
      </label>
    </div>
  );
};

const MessageForm = (props) => {
  const onSubmit = (data, form) => {
    props.sendMessage(data);
    form.restart();
  };
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
