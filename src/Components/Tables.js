import React from 'react';
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';
import axios from 'axios';


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
    // const handleEdit =(id)=>{


      
    //     // if (window.confirm('Would You Like To Edit This Record?')) {
    //     //     //eslint-disable-line
    //     //     window.location.href="/book" 
    //     //    }
    //     };
    

    const deleteFunc = async(id) => {
      //console.log('Delete item:', id)
        let res = await axios.delete(`https://api.palmbookingkrish.com/api/Booking/DeleteBookingBy${id}`)
        let json = await res.json()

        console.log(json)
    }
       
 
        
   
  return (
    
                    <Wrapper>
                        <div className='child1ButtonSpacing'>
                            <Link to={`/book/${id}`}>
                            <button id={id} style={styling.buttonStyle} type='button'>
                            <img style={styling.imageStyle} src='https://cdn-icons-png.flaticon.com/512/126/126794.png'/>
                            </button>
                            </Link>
                           
                        </div>
                        <div className='child2ButtonSpacing'>
                        {/* <Link to={`/book/${id}`}> */}
                        <button onClick={() => deleteFunc(id)} id={id} type='button'>
                            <img style={styling.imageStyle} src='https://icon-library.com/images/icon-delete/icon-delete-16.jpg'/>
                            </button>
                        {/* </Link> */}
                        </div>
                    </Wrapper>
               
               
  )
}

export default Tables