import React from 'react';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';


const ProfileForm = () => {
  return (
    <div>
        <Form>
            <h3>User Profile</h3>
        <FormGroup>
            <Label for="exampleName">
                Name
            </Label>
            <Input
                id="exampleName"
                name="bookingname"
                type="text"
            />
        </FormGroup>
        <FormGroup>
            <Label for="exampleEmail">
                Email
            </Label>
            <Input
                id="exampleEmail"
                name="email"
                type="email"
            />
        </FormGroup>
        </Form>

        <h7>Bookings:</h7>
        
    </div>
  )
}

export default ProfileForm

