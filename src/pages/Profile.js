import React from 'react';
import ProfileForm from '../Components/ProfileForm';
// import jwt from "jsonwebtoken"

// const session_url="oidc.user:https://palmbookingkrish.com:ebookkeeping-pwa" ;
// const session=JSON.parse(sessionStorage.getItem(session_url))  ;






const Profile = () => {
  // console.log({userInfo: jwt.decode(session?.access_token)})
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