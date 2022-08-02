import React, {useEffect, useState} from 'react';
import {useLocation, useParams  } from 'react-router-dom';
import axios from '../api/axios';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';

const initData ={
  contactName: '',
  contactEmail: '',
  reasonOfContact: '',
  message: '',
}

const styles={
  Button:{
      backgroundColor:"#0F7173",
  }
}

// const renderResponse = (data) =>{
//   let obj={}
//   obj.name = data.contactName
//   obj.email = data.contactEmail
//   obj.reasonOfContact = data.rOC
//   obj.message = data.message


//   return obj

// }


const ContactForm = (props) => {

  const {id} = useParams()
  // console.log({id})

  const [contactInfo, setContactInfo] = useState(initData);
  const handleChange = (eve) =>{
    setContactInfo(prev =>({
        ...prev, [eve.target.name]:eve.target.value}))
  }
// console.log({contactInfo})

const submitData = (e) =>{
  e.preventDefault()

  postContactInfo()
  
  // if(!contactInfo.contactName){
  // return
  // }
  // console.log({contactInfo})
}

// {
//   "user": {
//     "name": "string",
//     "email": "string"
//   },
//   "reasonOfContact": "string",
//   "message": "string"
// }
// const initData ={
//   contactName: '',
//   contactEmail: '',
//   reasonOfContact: '',
//   message: '',
// }


const postContactInfo = async()=>{

  let postObj={}, user={}
  user.name = contactInfo.contactName
  user.email = contactInfo.contactEmail

  postObj.reasonOfContact =  contactInfo.reasonOfContact
  postObj.message =  contactInfo.message

  try {
      const response = await axios.post(`/Contact/CreateContact`, {...postObj,user})
      console.log({response})
      // setContactInfo(response.data)
  } catch (error) {
      console.log({response:error})
  }
}

// useEffect(() => {

//   if(id){
//     getContactInfo()
//   }


// return () => {
  
// }
// }, [id])



  return (
    <div>
    <Form>
    <FormGroup>
        <Label for="exampleContactName">
          Name
        </Label>
        <Input
          id="exampleContactName"
          name="contactName"
          placeholder="John Doe"
          type="text"
          value={contactInfo.contactName}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleContactEmail">
          Email
        </Label>
        <Input
          id="exampleContactEmail"
          name="contactEmail"
          placeholder="johndoe@gmail.com"
          type="email"
          value={contactInfo.contactEmail}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleROC">
          Reason for Contact
        </Label>
        <Input
          id="exampleROC"
          name="reasonOfContact"
          type="select"
          value={contactInfo.reasonOfContact}
          onChange={handleChange}
        >
            <option>
                Pick a reason for contacting us
            </option>
            <option>
                Price Enquiries
            </option>
            <option>
                Question about Hall or Room
            </option>
            <option>
                Question about booking
            </option>
            <option>
                Other
            </option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleMessage">
          Message
        </Label>
        <Input
          style={{resize:"none", height:"120px"}}
          id="exampleMessage"
          name="message"
          type="textarea"
          value={contactInfo.message}
          onChange={handleChange}
        />
      </FormGroup>
      <Button style={styles.Button} type='submit' onClick={submitData}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default ContactForm