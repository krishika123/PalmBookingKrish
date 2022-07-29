import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeCarousel from '../Components/HomeCarousel';
import Cards from '../Components/Cards';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { additionalInfo } from '../fakeData/data';

const styles ={
  h4Styling:{
    paddingTop:"5px",
  }
}

console.log({additionalInfo});

const Home = () => {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <h3>This website is the official conference room and hall booking site for the Palm Hotel.</h3>
        <p>At this prestigious establishment, we offer 3 large conference halls and 9 comfortable conference rooms, all of which can be personalized to your needs.</p>
        <HomeCarousel/>
        <h4 style={styles.h4Styling}>Additional Information:</h4>
        <div className='grid-container'>
          {
            additionalInfo.map(item =><Cards key={item.title} {...item} />)
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

export default Home