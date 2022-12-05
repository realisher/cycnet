/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from 'react';
import './Form.css';
import FormSub from './FormSub';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
       
        {!isSubmitted ? (
          <FormSub submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;