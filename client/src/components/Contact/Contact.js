import React,{useRef} from 'react';
import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import Button from '../Button/Button';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { useState } from 'react';
const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(`${process.env.REACT_APP_YOUR_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, form.current,{
          publicKey:`${process.env.REACT_APP_Public_Key}`,
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  return (
    <div className='contact-section'> 
    <section className='form_section'>
        <div className='left-form-side'>
          <div className='contact_form'>
              <Button isOutline='true' text='chaudharyranjit459@gmail.com' icon={<HiMail fontSize='20px'/>}></Button>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className='form_control'>
              <label htmlFor="name">Name</label>
              <input type="text" name='user_name' placeholder='Jhon Peter'/>
            </div>

            <div className='form_control'>
              <label htmlFor="email">Email</label>
              <input type="text" name='user_email' placeholder='abc@example.com'/>
            </div>

            <div className='form_control'>
              <label htmlFor="text">Text</label>
              <textarea type="text" name='message' placeholder='Discription'/>
            </div>
            <div className='submit'>
              <Button text='SUBMIT' />
            </div>
          </form>
          </div>
        <div className='contact_image'>
          <img src="/images/image2.png" alt="image" />
        </div>
    </section>
    </div>
    
  )
}

export default ContactForm;