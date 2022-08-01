import React from 'react';
import ContactForm from '../Components/ContactForm';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


const Contact = () => {
  return (
    <div>
      <div className='parentTextBox'>
      <div className='textBox'>
        <ContactForm/>
      </div>
      </div>
    </div>
  )
}

export default Contact