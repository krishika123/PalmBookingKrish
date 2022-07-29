import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProfileForm from '../Components/ProfileForm';



const Profile = () => {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className='parentTextBox'>
        <div className='textBox'>
          <ProfileForm/>
        </div>
      </div>
      <br></br>
      <div>
      <Footer/>
      </div>
    </div>
  )
}

export default Profile