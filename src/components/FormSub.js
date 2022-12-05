import React from 'react';
import useForm from './useForm';
import './Form.css';

const FormSub = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm
  );

  return (
    <div className='form-content-right'>
                <h1>CONTACT US</h1>

                <h2>Feel Free To Contact Us</h2>

      <form onSubmit={handleSubmit} className='form' noValidate>
     
       
        <div className='form-inputs'>
        <i class="fa fa-envelope fa-fw fa-lg icon">
              </i>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        
       
        <button className='form-input-btn' type='submit'>
          Subscribe
        </button>
    
      </form>
    </div>
  );
};

export default FormSub;