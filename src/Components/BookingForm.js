import React, {useEffect, useState} from 'react';
import {useNavigate , useParams  } from 'react-router-dom';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';
import SweetAlert from 'react-bootstrap-sweetalert';
import axios from '../api/axios';
import LoadingOverlay from 'react-loading-overlay';


const initData ={
    eventDate: '',
    eventTime: '',
    facilityId: '',
    additionalInfo: '',
    facilityName:""
}

const styles={
    Button:{
        backgroundColor:"#0F7173",
    }
}


const BookingForm = (props) => {
    const {id} = useParams()
    //console.log({id})
    const navigate = useNavigate();
    const [bookingInfo, setBookingInfo] = useState(initData);
    const [facilities, setFacilities] = useState([]);
    const [selectedFacility, setselectedFacility] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const [isActive, setIsActive] = useState(false)
    

    const renderResponse = (data) =>{
        //console.log({data: facilities.find(x => x.name === data.facilityName)?.id, facilities})
        let obj={...data, facilityId: facilities.find(x => x.name === data.facilityName)?.id}
        setselectedFacility(obj.facilityName)
        setBookingInfo(obj)
    
    }
   
    
    const handleChange = (eve) =>{
        setBookingInfo(prev =>({
            ...prev, [eve.target.name]:eve.target.value}))
    }
    console.log({bookingInfo})
   
    const getBookingInfo = async()=>{
            try {
                const response = await axios.get(`/Booking/GetBookingBy${id}`)
                //console.log({response2222: renderResponse(response.data[0])})
            renderResponse(response.data[0])
            } catch (error) {
                console.error({response:error})
            }
    }

    const postBookingInfo = async()=>{
        try {
            const response = await axios.post(`/Booking/CreateBooking`, {...bookingInfo})
            setShowAlert(true)
            setIsActive(false)
      
        } catch (error) {
            console.log({response:error})
            setIsActive(false)
        }
    }
    const UpdateBookingInfo = async()=>{
        try {
            const response = await axios.post(`/Booking/UpdateBookingBy${id}`, {...bookingInfo})
             //setShowAlert(true)
             //setIsActive(false)
      
        } catch (error) {
            console.log({response:error})
            //setIsActive(false)
        }
    }

    const getFacilities = async() => {
        try{
            const result = await axios.get(`/Facility/GetFacilities`)
            console.log({result})
            setFacilities(result.data)
           
        }catch (error){

        }
    }

   
    const submitData = (e) =>{
        e.preventDefault()
           if(id){
            UpdateBookingInfo()
           }else{
            postBookingInfo()
           }
           
    }
    const onConfirm = ()=>{

        setShowAlert(false)
      
        navigate("/profile", { replace: true });
      
      }
      const onCancel =()=>{
      
      }

    useEffect(() => {

        if(id){
            getBookingInfo()
          
        }
        
      
      return () => {
        
      }
    }, [id,])


    useEffect(() => {
        getFacilities()
    }, [])
    


    return (
    <LoadingOverlay active={isActive} spinner text='Loading your content...'>
    <div>
        <Form>
        <FormGroup>
            <Label for="exampleDate">
                Event Date
            </Label>
            <Input
                id="exampleDate"
                name="eventDate"
                placeholder="01-10-2022"
                type="date"            
                // value={bookingInfo.eventDate.substr(6,10) + '-' + bookingInfo.eventDate.substr(3,2) + '-' + bookingInfo.eventDate.substr(0,2)}
                value={bookingInfo?.eventDate || ''}
                onChange={handleChange}
            />
        </FormGroup>
        <FormGroup>
            <Label for="exampleTime">
                Event Time
            </Label>
            <Input
                id="exampleTime"
                name="eventTime"
                placeholder="10:20"
                type="time"
                value={bookingInfo.eventTime}
                onChange={handleChange}
            />
        </FormGroup>
        <FormGroup>
            <Label for="exampleSelect">
                Select a Hall or Conference Room
            </Label>
            <Input
                id="exampleSelect"
                name="facilityId"
                placeholder={bookingInfo?.facilityName}
                type="select"
                value={bookingInfo?.facilityId}
                onChange={handleChange}
            >
            <option>
                Choose a Hall from the List
            </option>
            {
                facilities.map(facility => <option key={facility.id} value={facility.id} defaultValue={selectedFacility == facility.facilityName ? true : false}>{facility.name}</option> )
            }
            </Input>
            {/* <Input
                id="exampleSelect"
                name="facilityId"
                type="select"
                value={bookingInfo?.facilityId}
                onChange={handleChange}
            >
            <option>
                Choose a Hall from the List
            </option>
            {
                facilities.map(facility => <option key={facility.id} value={facility.id} defaultValue={selectedFacility == facility.facilityName ? true : false}>{facility.name}</option> )
            }
            </Input> */}
        </FormGroup>
        <FormGroup>
            <Label for="exampleText">
                Anything Else?
            </Label>
            <Input
                style={{resize:"none", height:"120px"}}
                id="exampleText"
                name="additionalInfo"
                type="textarea"
                value={bookingInfo.additionalInfo}
                onChange={handleChange}
                />
        </FormGroup>
        <Button type='submit' style={styles.Button} onClick={submitData} >
            Submit
        </Button>
        <SweetAlert show={showAlert} success title="Your booking has been made!" onConfirm={onConfirm} onCancel={onCancel}>
        </SweetAlert>
    </Form>
    </div>
    </LoadingOverlay>
    
    )
}
 export default BookingForm



// import { render } from '@testing-library/react';
// import React, {Component} from 'react';
// import {Form,FormGroup,Label,Input,Button} from 'reactstrap';
// export default class BookingForm extends Component {
//     userData;
//     constructor(props){
//         super(props);
//         this.onChangeName = this.onChangeName.bind(this);
//         this.onChangeEmail = this.onChangeEmail.bind(this);
//         this.onChangePhone = this.onChangePhone.bind(this);
//         this.onChangeDate = this.onChangeDate.bind(this);
//         this.onChangeTime = this.onChangeTime.bind(this);
//         this.onChangeHall = this.onChangeHall.bind(this);
//         this.onChangeAddInfo = this.onChangeAddInfo.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
//         this.state = {
//             Name: '',
//             Email: '',
//             Phone: '',
//             Date: '',
//             Time: '',
//             Hall: '',
//             AddInfo: ''
//         }

//     }
// }

// //form events

// onChangeName =(e) => {
//     this.setState({Name: e.target.value});
// }
// onChangeEmail =(e) => {
//     this.setState({Email: e.target.value});
// }
// onChangePhone =(e) => {
//     this.setState({Phone: e.target.value});
// }
// onChangeDate =(e) => {
//     this.setState({Date: e.target.value});
// }
// onChangeTime =(e) => {
//     this.setState({Time: e.target.value});
// }
// onChangeHall =(e) => {
//     this.setState({Hall: e.target.value});
// }
// onChangeAddInfo =(e) => {
//     this.setState({AddInfo: e.target.value});
// }

// onSubmit =(e) => {
//     e.preventDefault()
//     this.setState({
//         Name: '',
//         Email: '',
//         Phone: '',
//         Date: '',
//         Time: '',
//         Hall: '',
//         AddInfo: ''
//     })
// }

// // React Life Cycle
// componentDidMount =() => {
//     this.userData = JSON.parse(localStorage.getItem('user'));
//     if (localStorage.getItem('user')) {
//         this.setState({
//             Name: this.userData.Name,
//             Email: this.userData.Email,
//             Phone: this.userData.Phone,
//             Date: this.userData.Date,
//             Time: this.userData.Time,
//             Hall: this.userData.Hall,
//             AddInfo: this.userData.AddInfo,
//         })
//     } else {
//         this.setState({
//             Name: '',
//             Email: '',
//             Phone: '',
//             Date: '',
//             Time: '',
//             Hall: '',
//             AddInfo: ''
//         })
//     }
// }
// componentWillUpdate  =(nextProps, nextState) =>{
//     localStorage.setItem('user',JSON.stringify(nextState));
// }



// // const BookingForm = () => {
//   render= () => {
//   return (
//     <div>
//         <Form onSubmit={this.onSubmit}>
//         <FormGroup>
//             <Label for="exampleName">
//                 Name
//             </Label>
//             <Input
//                 id="exampleName"
//                 name="name"
//                 placeholder="John Doe"
//                 type="text"
//                 value={this.state.Name}
//                 onChange={this.onChangeName}
//             />
//         </FormGroup>
//         <FormGroup>
//             <Label for="exampleEmail">
//                 Email
//             </Label>
//             <Input
//                 id="exampleEmail"
//                 name="email"
//                 placeholder="johndoe@gmail.com"
//                 type="email"
//                 value={this.state.Email}
//                 onChange={this.onChangeEmail}
//             />
//         </FormGroup>
//         <FormGroup>
//             <Label for="examplePhone">
//                 Phone Number
//             </Label>
//             <Input
//                 id="examplePhone"
//                 name="phonenumber"
//                 placeholder="6325569875"
//                 type="tel"
//                 value={this.state.Phone}
//                 onChange={this.onChangePhone}
//             />
//         </FormGroup>
//         <FormGroup>
//             <Label for="exampleDate">
//                 Event Date
//             </Label>
//             <Input
//                 id="exampleDate"
//                 name="date"
//                 placeholder="01-10-2022"
//                 type="date"
//                 value={this.state.Date}
//                 onChange={this.onChangeDate}
//             />
//         </FormGroup>
//         <FormGroup>
//             <Label for="exampleTime">
//                 Event Time
//             </Label>
//             <Input
//                 id="exampleTime"
//                 name="time"
//                 placeholder="10:20"
//                 type="time"
//                 value={this.state.Time}
//                 onChange={this.onChangeTime}
//             />
//         </FormGroup>
//         <FormGroup>
//             <Label for="exampleSelect">
//                 Select a Hall or Conference Room
//             </Label>
//             <Input
//                 id="exampleSelect"
//                 name="select"
//                 type="select"
//                 value={this.state.Hall}
//                 onChange={this.onChangeHall}
//             >
//             <option>
//                 Choose a Hall from the List
//             </option>
//             <option>
//                 Mayor Hall
//             </option>
//             <option>
//                 VP Hall
//             </option>
//             <option>
//                 President Hall
//             </option>
//             <option>
//                 Bronze Conference Room
//             </option>
//             <option>
//                 Silver Conference Room
//             </option>
//             <option>
//                 Gold Conference Room
//             </option>
//             </Input>
//         </FormGroup>
//         <FormGroup>
//             <Label for="exampleText">
//                 Anything Else?
//             </Label>
//             <Input
//                 style={{resize:"none", height:"120px"}}
//                 id="exampleText"
//                 name="text"
//                 type="textarea"
//                 value={this.state.AddInfo}
//                 onChange={this.onChangeAddInfo}
//                 />
//         </FormGroup>
//         <Button type='submit'>
//             Submit
//         </Button>
//         </Form>
//     </div>
//   )
//   }


// // export default BookingForm