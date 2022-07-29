import React from 'react';
import { Outlet, Link } from "react-router-dom";

const styles={
    footerStyle:{
      backgroundColor:"#001524",
      display:"flex",
      bottom:0,
      justifyContent: "space-between",
      color:"white",
      padding:"10px 20px",
      height:150,
    
    },
    logo:{
      fontSize:45,
      fontWeight:900,
      color:"#f1f1f1"
    }
  }
  
const Footer = () => {
  return (
    <div style={styles.footerStyle} className={'footerStyling'}>
      <div>
          <h4>About</h4>
          <p style={{width:400}}>
          Choose PalmBooker for your next business meeting, sales conference or social event and experience why our establishment is the place to meet.
          </p>
      </div>
      <div>
        <h4>Links</h4>
        <div><Link style={{color:"white"}} to="/">Home</Link></div>
        <div><Link style={{color:"white"}} to="/about">About</Link></div>
        <div><Link style={{color:"white"}} to="/book">Book</Link></div>
        <div><Link style={{color:"white"}} to="/contact">Contact</Link></div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Footer

