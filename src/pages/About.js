import React from 'react';
import { hallsAndRooms } from '../fakeData/data';
import Cards from '../Components/Cards';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


const About = () => {
  return (
    <div>
      <div>
      <Header/>
      </div>

      <div>
        <h3>About</h3>
        <p>
          Our functional spaces are designed to provide the ideal meeting and
          events experience to every guest.
        </p>
        <p>Every room can be personalized to your needs.</p>
        <p>
          Rooms and halls can be booked Monday to Friday, between 08:00 and
          18:00. You can either book conference halls or meeting rooms. At the Palm Hotel, we have 3 conference halls and 9 meeting rooms.
        </p>
        <p>These are our different types of conference halls and conference rooms:</p>
        
        <div className='grid-container'>
        {
        hallsAndRooms.map(item =><Cards key={item.title} {...item} />)
        }
        </div>
      </div>
      <br></br>
      <div>
      <Footer/>
      </div>
    </div>
  )
}

export default About