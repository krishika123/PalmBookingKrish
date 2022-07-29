import React from 'react';
import BookingTable from '../Components/BookingTable';
// import Tables from '../Components/Tables';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Bookings = () => {
  return (
    <div>
      <div>
      <Header/>
      </div>
      <div className='tableMods'>
      <div className='bookingTable'>
        <BookingTable/>
      </div>
      </div>
      <br></br>
      <div>
      <Footer/>
      </div>
    </div>
  )
}

export default Bookings