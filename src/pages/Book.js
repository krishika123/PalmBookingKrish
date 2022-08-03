import React from 'react';
import BookingForm from '../Components/BookingForm';
import bookingform from '../Components/bookingform.png';

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
          <img src={bookingform} className='imgFormstyle'></img>
        </div>
      </div>  

    </div>
    
  )
}

export default Book