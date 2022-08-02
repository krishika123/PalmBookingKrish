import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { useParams } from "react-router-dom";
import axios from "../api/axios";

const initData = {
  name: "",
  email: "",
  bookingId: ""
};

const ProfileForm = (props) => {
  const { id } = useParams();

  const [userInfo, setUserInfo] = useState(initData);

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
      //console.log({response2222: renderResponse(response.data[0])})
      renderResponse(response.data[0]);
    } catch (error) {
      console.error({ response: error });
    }
  };

  getUserInfo();

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

      <h7>Bookings:</h7>
      <p>table for bookings</p>
    </div>
  );
};

export default ProfileForm;
