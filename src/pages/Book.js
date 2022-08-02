import React from 'react';
import BookingForm from '../Components/BookingForm';
// import Header from '../Components/Header';
// import Footer from '../Components/Footer';
import contactform from '../Components/contactform.png';



const Book = () => {
  return (
    <div>

      <div>
        <h3 style={{textAlign:"center"}}>Booking Form</h3>
      </div>

      <div className='parentFormDiv'>

        <div className='childFormDiv'>
          <div className='parentTextBox'>
          <div className='textBox'>
          <BookingForm/>
          </div>
          </div>
        </div>
        <div className='childFormDiv'>
          <img src={contactform}></img>
        </div>
        
      </div>
      
    </div>
    
  )
}

export default Book