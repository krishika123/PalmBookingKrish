import React from 'react';
import BookingTable from '../Components/BookingTable';
// import Tables from '../Components/Tables';
// import Header from '../Components/Header';
// import Footer from '../Components/Footer';

const Bookings = () => {
  return (
    <div>

      <div>
        <h3 style={{textAlign:"center"}}> All Bookings </h3>
      </div>
      <div>
        <div className='tableMods'>
        <div className='bookingTable'>
          <BookingTable/>
        </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Bookings