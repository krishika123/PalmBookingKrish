import React from 'react'

const Main = (props) => {
    const {children} = props;
  return (
    <main>

        {children}
        {/* <div class="box"></div>
        <div class="box"></div> 
        <div class="box"></div>
        <div class="box"></div> */}
    </main>
  )
}

export default Main