import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

const Layout = (props) => {
    const{children} = props
  return (
    <>
        <Header/>
        <Main>{children}</Main>
        <Footer/>
    </>
  )
}

export default Layout