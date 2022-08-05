import React, { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import TableComponent from "./TableComponent";

const session_url = "oidc.user:https://palmbookingkrish.com:ebookkeeping-pwa";
const session = JSON.parse(sessionStorage.getItem(session_url));
console.log(session)
const user = session?.profile?.email || "your email";
const id = session?.profile?.sub || "your id";

const initData = {
  name: "",
  email: "",
};

const ProfileForm = (props) => {

  const [userInfo, setUserInfo] = useState(initData);
  const [userBookings, setUserBookings] = useState([]);

  const renderResponse = (data) => {
    //console.log({data: facilities.find(x => x.name === data.facilityName)?.id, facilities})
    let obj = { ...data };
    setUserInfo(obj);
  };

  const handleChange = (eve) => {
    setUserInfo((prev) => ({
      ...prev,
      [eve.target.name]: eve.target.value
    }));
  };


  const getUserInfo = async () => {
    try {
      const response = await axios.get(`/User/GetUserBy${id}`);
      setUserInfo(response.data)
    } catch (error) {
      console.error({ response: error });
    }
  };

  const getUserBookings = async () => {
    try {
      const response = await axios.get(`/Booking/GetBookingsByEmail${user}`);
      setUserBookings(response.data)
      console.log(response)
    } catch (error) {
      console.error({ response: error });
    }
  };

 

  useEffect(() => {
    getUserBookings();
    getUserInfo();
  
    return () => {
      
    }
  }, [])
  

  return (
    <div>
      <Form>
        <h3>User Profile</h3>
        <FormGroup>
          <Label for="exampleName">Name</Label>
          <Input
            id="exampleName"
            name="bookingname"
            type="text"
            value={userInfo.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            type="email"
            value={userInfo.email}
            onChange={handleChange}
          />
        </FormGroup>
      </Form>

      <h3> User Bookings </h3>
      
      <TableComponent data={userBookings}/>

    </div>
  );
};

export default ProfileForm;
