import React, { useState} from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import axios from '../api/axios';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';
import SweetAlert from 'react-bootstrap-sweetalert';
import LoadingOverlay from 'react-loading-overlay';


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



const ContactForm = (props) => {
  const navigate = useNavigate();
  const {id} = useParams()
  const [showAlert, setShowAlert] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const [contactInfo, setContactInfo] = useState(initData);
  const handleChange = (eve) =>{
    setContactInfo(prev =>({
        ...prev, [eve.target.name]:eve.target.value}))
  }


const submitData = (e) =>{
  e.preventDefault()

  postContactInfo()
  

}


const postContactInfo = async()=>{
  setIsActive(true)

  let postObj={}, user={}
  

  postObj.reasonOfContact =  contactInfo.reasonOfContact
  postObj.message =  contactInfo.message
  postObj.name = contactInfo.contactName
  postObj.email = contactInfo.contactEmail
  try {
      const response = await axios.post(`/Contact`, {...postObj})
      setShowAlert(true)
      setIsActive(false)

  } catch (error) {
      console.log({response:error})
      setIsActive(false)
  }
}


const onConfirm = ()=>{

  setShowAlert(false)

  navigate("/", { replace: true });

}
const onCancel =()=>{

}

  return (
    <LoadingOverlay
  active={isActive}
  spinner
  text='Loading your content...'
  >
 

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
      <SweetAlert show={showAlert} success title="Your message has been sent!" onConfirm={onConfirm} onCancel={onCancel}>
        Thank You!
      </SweetAlert>
    </Form>
    </div>
    </LoadingOverlay>
  )
}

export default ContactForm