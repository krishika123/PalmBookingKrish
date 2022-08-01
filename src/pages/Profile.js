import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProfileForm from '../Components/ProfileForm';



const Profile = () => {
  return (
    <div>
      <div className='parentTextBox'>
        <div className='textBox'>
          <ProfileForm/>
        </div>
      </div>
    </div>
  )
}

export default Profile