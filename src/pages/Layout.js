import React from 'react'
//import Footer from '../Components/Footer'
// import Header from '../Components/Header'

const Layout = (props) => {
    const {children} = props
  return (
    <div className='parentsect'>

      {/* <div className='headersect'>
        <Header/>
      </div> */}

      <div className='bodysect' style={{height:"100vh",}}>
        {
          children
        }
      </div>
      <br></br>
      <br></br>
      {/* <div className='footersect'>
        <Footer/>
      </div> */}

    </div>
  )
}

export default Layout