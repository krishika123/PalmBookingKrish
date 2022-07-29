import React, {useState} from 'react';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import { Formik } from 'formik';



    
const styles = {
    Link: {
        color: "#0F7173",
    },
    Button:{
        backgroundColor:"#0F7173",
        marginBottom: 5,
    },
    P:{
        marginTop:5,
    },
    
}

const SignUpForm = () => {

    // const [userInfo, setUserInfo] = useState(initialValues);
    // console.log(userInfo)
    // const handleChange = (eve) =>{
    //     setUserInfo(prev =>({
    //         ...prev, [eve.target.name]:eve.target.value}))
    // }
    // const submitData = (e) =>{
    //   e.preventDefault()
       
    //   if(!userInfo.username){
    //     console.log("Enter UserNAme")
    //   return
    //   }



//       let obj ={}
//       obj.name = userInfo.username
//       obj.email = userInfo.useremail
//       obj.phoneNumber = userInfo.userphonenumber
//       obj.password = userInfo.userpassword
//       console.log(obj)

//       axios.post('https://psl-webapps:8089/api/User/CreateUser', obj)
//       .then(res =>{
//         console.log({res});
//       }).catch(err =>{
//         console.log({err})
//       })
//       console.log({userInfo})
//   }

  return (
    <div>
    <Formik
        initialValues={{ username:'', useremail: '', userphonenumber: '', userpassword: '', userconfirmpassword:'' }}
        validate={values => {
        const errors = {};
        
        if (!values.username) {
            errors.username = 'Required';
        }
        
        if (!values.useremail) {
            errors.useremail = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.useremail)
        ) {
            errors.useremail = 'Invalid email address';
        }

        if (!values.userphonenumber) {
            errors.userphonenumber = 'Required';
        } else if (
            (values.userphonenumber.length>10)
        ) {
            errors.userphonenumber = 'Invalid phone number';
        }

        if (!values.userpassword) {
            errors.userpassword = 'Required';
        }

        if (!values.userconfirmpassword) {
            errors.userconfirmpassword = 'Required';
        } else if (
            (values.userconfirmpassword!==values.userpassword)
        ) {
            errors.userconfirmpassword = 'Passwords do not match';
        }
        
        return errors;
      }}
      
      onSubmit={(values, { setSubmitting }) => {
        console.log({values})
        
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (

    <div>
      <Form onSubmit={handleSubmit}>
        <h5>Please fill this form to create an account!</h5>
        <FormGroup>
            <Label for="exampleName">
                Name
            </Label>
            <Input
                id="exampleName"
                name="username"
                placeholder="John Doe"
                type="text"
                value={values.username}
                onBlur={handleBlur}
                onChange={handleChange}
            /> 
            {errors.username && touched.username && errors.username}
        </FormGroup>
        <FormGroup>
            <Label for="exampleEmail">
                Email
            </Label>
            <Input
                id="exampleEmail"
                name="useremail"
                placeholder="johndoe@gmail.com"
                type="email"
                value={values.useremail}
                onBlur={handleBlur}
                onChange={handleChange}
            />
            {errors.useremail && touched.useremail && errors.useremail}
        </FormGroup>
        <FormGroup>
            <Label for="examplePhone">
                Phone Number
            </Label>
            <Input
                id="examplePhone"
                name="userphonenumber"
                placeholder="6325569875"
                type="tel"
                value={values.userphonenumber}
                onBlur={handleBlur}
                onChange={handleChange}
            />
            {errors.userphonenumber && touched.userphonenumber && errors.userphonenumber}
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
                value={values.userpassword}
                onBlur={handleBlur}
                onChange={handleChange}
            />
            {errors.userpassword && touched.userpassword && errors.userpassword}
        </FormGroup>
        <FormGroup>
            <Label for="examplePassword">
                Confirm Password
            </Label>
            <Input
                id="exampleConfirmPassword"
                name="userconfirmpassword"
                placeholder="**********"
                type="text"
                value={values.userconfirmpassword}
                onBlur={handleBlur}
                onChange={handleChange}
            />
            {errors.userconfirmpassword && touched.userconfirmpassword && errors.userconfirmpassword}
        </FormGroup>
        <Button style={styles.Button} type='submit' >
            Sign Up
        </Button>
        <h5 style={styles.P}>Already have an account? <Link style={styles.Link} to='/logIn'>Log In!</Link></h5>
        <p style={styles.P}><Link style={styles.Link} to='/'>Home</Link></p>

        </Form>
    </div>

    )}
    </Formik>

    </div>
    
  )
}



export default SignUpForm