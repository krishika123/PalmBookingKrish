import React,{useState, useRef} from 'react';
import Nav from "../Nav";
import hammenu from '../hammenu.png';
import SideBar from '../SideBar';
import Modal from '@mui/material/Modal';

const styles={
    menuStyle:{
        width:"70%",
        height:"70%",
        float:"right",
    },
    headerSpacingStyle:{
        display:"grid",
        gridTemplateColumns:"65% 1fr",
        gap:"10px",
        margin:"5px",
        justifyItems:"center",
        alignItems:"center",
    }
    
}


const Content = () => {
  return (
    <>
      <h1 className="logoStyle">PalmBooker</h1>
    </>
  );
};

const SmallHeader = () => {
    const [show, setShow] = useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <header>
        <div style={styles.headerSpacingStyle}>
            <div>
                <Content/> 
            </div>
            <div>
                <img onClick={handleOpen} style={styles.menuStyle} src={hammenu} alt="Hamburger menu button"></img>
                <Modal
                     open={open}
                     onClose={handleClose}
                    //  aria-labelledby="parent-modal-title"
                    //  aria-describedby="parent-modal-description"
                >
                    <SideBar/>
                </Modal>
            </div>
        </div>
      
    </header>
  );
};

export default SmallHeader;


 {/* <img onClick={()=>setShow(!show)} style={styles.menuStyle} src={hammenu} alt="Hamburger menu button"></img>
        {
            show ?  
            <div><Nav/></div>
            : null
        } */}