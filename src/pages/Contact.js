import React from 'react';
import ContactForm from '../Components/ContactForm';
import contactform from '../Components/contactform.png';


const Contact = () => {
  return (
    <div>

      <div>
        <h3 style={{textAlign:"center"}}>Contact Form</h3>
      </div>

      <div className='parentFormDiv'>
        <div className='childFormDiv'>
          <div className='parentTextBox'>
          <div className='textBox'>
            <ContactForm/>
          </div>
          </div>
        </div>
        <div className='childFormDiv'>
          <img src={contactform} className='imgFormstyle'></img>
        </div>
      </div>  

    </div>

      
  )
}

export default Contact