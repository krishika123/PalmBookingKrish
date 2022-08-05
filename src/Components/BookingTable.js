import { AutoFixOffSharp } from '@mui/icons-material';
import axios from '../api/axios';
import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import styledComponents from 'styled-components';
import Tables from './Tables';

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



const BookingTable = () => {

    const [bookings, setBookings] = useState([])

    const getBookings = async() => {
        try {
        //   const response = await axios.get('/Booking/GetBookings')
        //   const result = await response.json()
        let memory = sessionStorage.getItem('oidc.user:https://palmbookingkrish.com:ebookkeeping-pwa')
        let token = JSON.parse(memory)
        fetch('https://api.palmbookingkrish.com/api/Booking/GetBookings', {headers:{
            Authorization: 'Bearer ' + token.access_token
        }})
        .then((res) => res.json())
        .then((results) => setBookings(results))
         
          
          
        } catch (error) {
            console.log({error});
        }
      
      } 
      useEffect(() => {
        getBookings()
        console.log('Bookings:', bookings)
      },[])
    //   console.log({data});



  return (
    <div><br></br><br></br>
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Facility</th>
                    <th>Add.Info</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>

                {
                    bookings.map(item =>  <tr key={item.id}>
                                        <td>{item?.user?.name}</td>
                                        <td>{item?.user?.email}</td>
                                        <td>{item?.eventDate}</td>
                                        <td>{item?.eventTime}</td>
                                        <td>{item?.facilityName}</td>
                                        <td>{item?.additionalInfo}</td>                                        
                                        <td><Tables id={item.id}/></td>
                        </tr>)
                }
               
               
            </tbody>
        </Table>
              
    </div>
  )
}

export default BookingTable