import React, { useState} from 'react';
import { Link , useParams, useNavigate,  } from 'react-router-dom';
import styledComponents from 'styled-components';
import axios from '../api/axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import LoadingOverlay from 'react-loading-overlay';



const styling ={
    imageStyle :{
        width:15,
        height:15,
        margin:1,
        padding:0,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignContent:"center",
    },
    buttonStyle:{
        marginRight:5
    }
}
const Wrapper = styledComponents.div`
    display:flex;
    flex-direction:row nowrap;
    justify-content:center;
    align-content:center;
    `

const Tables = ({id}) => {

    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [selectedId, SetSelectedId] = useState("")

    const deleteFunc = async(id) => {
     
      SetSelectedId(id)
      setIsActive(true)
        
    }
       
   const onCancel =()=>{
    setIsActive(false)
    }
   const onConfirm = async(id)=>{
    try {
        const res = await axios.delete(`/Booking/DeleteBookingBy${selectedId}`)
        
        if(res){
            window.location.reload()
        }
        console.log(res)
        setIsActive(false)
  
    } catch (error) {
        console.log({response:error})
        setIsActive(false)
    }
    
    }
        
   
  return (
    
                    <Wrapper>
                        <SweetAlert
                                warning
                                showCancel
                                confirmBtnText="Yes, delete it!"
                                confirmBtnBsStyle="danger"
                                title="Are you sure you want to delete this record?"
                                onConfirm={onConfirm}
                                onCancel={onCancel}
                                show={isActive}
                                focusCancelBtn
                                >
                                    You will not be able to get this booking back!
                        </SweetAlert>
                        <div className='child1ButtonSpacing'>
                            <Link to={`/book/${id}`}>
                            <button id={id} style={styling.buttonStyle} type='button'>
                            <img style={styling.imageStyle} src='https://cdn-icons-png.flaticon.com/512/126/126794.png'/>
                            </button>
                            </Link>
                           
                        </div>
                        <div className='child2ButtonSpacing'>
                       
                        <button onClick={() => deleteFunc(id)} id={id} type='button'>
                            <img style={styling.imageStyle} src='https://icon-library.com/images/icon-delete/icon-delete-16.jpg'/>
                        </button>
                        </div>
                    </Wrapper>
               
               
  )
}

export default Tables