import React,{useState, useEffect} from 'react';
import profileicon from './profileicon.png';
import { Link } from "react-router-dom";
import { login, logout } from '../service/authservice';


const session_url="oidc.user:https://palmbookingkrish.com:ebookkeeping-pwa" ;
const session=JSON.parse(sessionStorage.getItem(session_url))  ;
//console.log({session})
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
    sideBarMain:{
        position: "absolute",
        height: "100%",
        width: "40%",
        right:0,
        top:85,
        border:"1px solid rgb(61 188 191)",
        backgroundColor:"rgb(99 199 201)",
        boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
      },
      sideBarChild:{
        display: "grid",
        marginTop:"10px",
        gap:"15px",
        justifyContent:"center",
        alignContent: "center",
        textAlign:"center",
      },
      PopUp:{
        position: "absolute",
        height: "100px",
        width: "300px",
        right:0,
        top:60,
        padding:"10px",
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
      Button:{
        width:"50%",
        height:"auto",
        margin:5,
        padding:5,
      },
      ButtonLogIn:{
        width:"50%",
        height:"auto",
        padding:5,
        marginTop:25,
      }
    
}

const SideBar = () => {
    const [show, setShow] = useState(false);
    const [auth, setAuth] = useState(null);

    useEffect(() => {
    
        if(auth ===null){
          setAuth(getAuth())
        }
      
        return () => {
          
        }
      }, [])

    return (
        <div style={styles.sideBarMain} >
            <div style={styles.sideBarChild}>
            <img onClick={()=>setShow(!show)}  style={styles.Image} src={profileicon}></img>
            {
            show ?  
            <div style={styles.PopUp} >
            <div style={styles.PopUpChild}>
                <div>
            {
                auth ? <h4>{auth.user }</h4>:<button style={styles.ButtonLogIn} type='submit' onClick={login}> Log In </button>
            }
                </div>
                <div>
                {!auth ?null : <button style={styles.Button} type='submit' onClick={logout}> Log Out </button>}
                </div>

            </div>
            </div> : null
            }
            <Link style={{color:"white"}} to="/">Home</Link>
            <Link style={{color:"white"}} to="/about">About</Link>
            <Link style={{color:"white"}} to="/book">Book</Link>
            <Link style={{color:"white"}} to="/contact">Contact</Link>
            </div>
        </div>
        
    )
}

export default SideBar