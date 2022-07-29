import React,{useState, useRef} from 'react';
import Nav from './Nav';
import hammenu from './hammenu.png'
import styled from 'styled-components';


const styles={
  headerStyle:{
    backgroundColor:"#001524",
    display:"flex",
    justifyContent: "space-between",
    color:"white",
    padding:"0px 20px",
    height:70,
    
  },
  logo:{
    fontSize:45,
    fontWeight:900,
    color:"white"
  }
}



const Header = () => {
  const [show, setShow] = useState(false);
  const inputElement = useRef(null);
  const focusInput = () => {
    inputElement.current?.classList.toggle('HeaderLinks')
    console.log({inputElement: inputElement.current?.classList})
    console.log({ref: inputElement.current?.classList});
  }

  const NavWrapper = styled.div`
  display: none,
  background-color:red !important
 
`
  return (
    
    <div style={styles.headerStyle} className={"headerStyle"}>
      <div style={styles.logo}>PalmBooker</div>
      <Nav inputElement={inputElement} />
      <img onClick={focusInput} src={hammenu} className={"hammenuStyle"}></img>
      </div>
  )
}

export default Header
