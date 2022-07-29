import React,{useState,useRef, useEffect} from 'react';
import profileicon from './profileicon.png';
import { Outlet, Link } from "react-router-dom";
import styledComponents from 'styled-components';
import { login, logout } from '../service/authservice';

const session_url="oidc.user:https://palmbookingkrish.com:ebookkeeping-pwa" ;
const session=JSON.parse(sessionStorage.getItem(session_url))  ;
console.log({session})
const getAuth = ()=>{
  if(session){
    const access_token = session?.access_token
    const user = session?.profile?.name ||"your name"
     return {token:access_token,user}
  }else{
    return null
  }
}
const styles={
    navStyle:{
      backgroundColor:"black",
      display:"flex",
      justifyContent: "space-evenly",
      color:"#fff",
      padding:"0px 20px",
      alignContent:"space-evenly"
    },
    grid:{
        display:"grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        marginTop:20,
        position:"relative"
        
    },
    Image:{
      width:"auto",
      height:"25px",
      marginLeft:15,
    },
    AccountImage:{
      width:50,
      height:"auto",
      marginLeft:5,
      marginTop:10
    },
    Button:{
      width:"50%",
      height:"auto",
      margin:5,
    },
    PopUp:{
      position: "absolute",
      height: "150px",
      width: "300px",
      right:0,
      top:50,
      border:"1px solid rgb(61 188 191)",
      backgroundColor:"rgb(99 199 201)",
      zIndex: 1000,
    },
    PopUpChild:{
      display: "flex",
      flexDirection: "column",
      justifyContent:"center",
      alignContent: "center",
      textAlign:"center",
    },
    SignUpPopUp:{
      width:"500px",
      height:"auto",
      border:"1px solid blue",
      backgroundColor: "blue",
      zIndex: 1000,
    }
  }


const Nav = ({inputElement}) => {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(null)

  useEffect(() => {
    
    if(auth ===null){
      setAuth(getAuth())
    }
  
    return () => {
      
    }
  }, [])
   
 console.log({auth})
  return (
    <div ref={inputElement} style={styles.grid} className={"HeaderLinks"}>
        <Link style={{color:"white"}} to="/">Home</Link>
        <Link style={{color:"white"}} to="/about">About</Link>
        <Link style={{color:"white"}} to="/book">Book</Link>
        <Link style={{color:"white"}} to="/contact">Contact</Link>
        <img onClick={()=>setShow(!show)}  style={styles.Image} src={profileicon}></img>
        {
          show ?  
          <div style={styles.PopUp} >
            <div style={styles.PopUpChild}>
            <div>
            <Link to='/profile'><img style={styles.AccountImage} src={profileicon}></img></Link>
            </div>
            <div>
           {
            auth ? <h4>{auth.user }</h4>:<button style={styles.Button} type='submit' onClick={login}> Log In </button>
           }
              
           
            </div>
            <div>
            {!auth ?null : <button style={styles.Button} type='submit' onClick={logout}> Log Out </button>}
              
           
            </div>
            </div>
            </div> : null
        }
      <Outlet/>
    </div>
  )
}

export default Nav