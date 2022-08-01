import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
        <div>
            <h4 style={{textAlign:"left"}}>About</h4>
            <p className='footerP'>
                Choose PalmBooker for your next business meeting, sales conference or social event and experience why our establishment is the place to meet.
            </p>
        </div>
        <div className='footerLinksParent'>
        <h4>Links</h4>
        <div><Link className={'footerLinks'} to="/">Home</Link></div>
        <div><Link className={'footerLinks'} to="/about">About</Link></div>
        <div><Link className={'footerLinks'} to="/book">Book</Link></div>
        <div><Link className={'footerLinks'} to="/contact">Contact</Link></div>
        <Outlet/>
      </div>
        
    </footer>
  )
}

export default Footer