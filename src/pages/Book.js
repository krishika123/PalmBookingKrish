import React from 'react';
import BookingForm from '../Components/BookingForm';
import Header from '../Components/Header';
import Footer from '../Components/Footer';



const Book = () => {
  return (
    <div>
      <div className='parentTextBox'>
      <div className='textBox'>
        <BookingForm/>
      </div>
      </div>
    </div>
  )
}

export default Book