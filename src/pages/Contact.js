import React from 'react';
import ContactForm from '../Components/ContactForm';
// import Header from '../Components/Header';
// import Footer from '../Components/Footer';
import contactform from '../Components/contactform.png';


const Contact = () => {
  return (
    <div>

      <h3>Contact Form</h3>

      <div className='parentFormDiv'>

        <div className='childFormDiv'>
          <div className='parentTextBox'>
            <div className='textBox'>
              <ContactForm/>
            </div>
          </div>
        </div>
        <div className='childFormDiv'>
          <img src={contactform} className='contactFormImg'></img>
        </div>
      
      </div>
    
    </div>

      
  )
}

export default Contact