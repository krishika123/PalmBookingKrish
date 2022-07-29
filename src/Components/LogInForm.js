import React, {useState} from 'react';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';
import { Link } from "react-router-dom";

const initData ={
    username: '',
    useremail: '',
    userphonenumber: 0,
    userpassword: '',
    userconfirmpassword:'',
  }

const styles = {
    Link: {
        color: "#0F7173",
    },
    Button:{
        backgroundColor:"#0F7173",
    }
}

const LogInForm = () => {
    const [userInfo, setUserInfo] = useState(initData);
    
    const handleChange = (eve) =>{
        setUserInfo(prev =>({
            ...prev, [eve.target.name]:eve.target.value}))
    }
    const submitData = (e) =>{
      e.preventDefault()

      if(!userInfo.username){
      return
      }
      console.log({userInfo})
  }

  return (
    <div>
      <Form>
        <h5>Please fill this form to log into your account!</h5>
        
        <FormGroup>
            <Label for="exampleEmail">
                Email
            </Label>
            <Input
                id="exampleEmail"
                name="useremail"
                placeholder="johndoe@gmail.com"
                type="email"
                onChange={handleChange}
            />
        </FormGroup>
        <FormGroup>
            <Label for="examplePassword">
                Password
            </Label>
            <Input
                id="examplePassword"
                name="userpassword"
                placeholder="**********"
                type="text"
                onChange={handleChange}
            />
        </FormGroup>
        <Button style={styles.Button} type='submit' onClick={submitData}>
            Sign Up
        </Button>
        <h5>Don't have an account? <Link style={styles.Link} to='/signUp'>Sign Up!</Link></h5>
        <p><Link style={styles.Link} to='/'>Home</Link></p>
        
        </Form>
          
    
    </div>
  )
}

export default LogInForm