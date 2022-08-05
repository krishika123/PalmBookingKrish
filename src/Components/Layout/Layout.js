import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SmallHeader from '../Header/SmallHeader';
import Main from '../Main/Main';

const Layout = (props) => {
    const{children} = props
  return (
    <>
        <div>
          <Header />
          <SmallHeader/>
        </div>

        <div>
          <Main>{children}</Main>
        </div>

        <div>
          <Footer/>
        </div>
    </>
  )
}

export default Layout