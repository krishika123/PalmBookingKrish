import React, {useEffect, useState} from 'react';
import {useLocation, useParams  } from 'react-router-dom';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';
//  import axios from 'axios';
  import axios from '../api/axios';


const initData ={
    date: '',
    time: '',
    hall: '',
    info: ''
}

const styles={
    Button:{
        backgroundColor:"#0F7173",
    }
}

// additionalInfo: "Thanks lots"
// eventDate: "04-12-2022"
// eventTime: "11:46"
// facility: null
// facilityId: "d14dbc48-996d-45b0-ab8c-1df3c9c79ca5"
// id: "6b49ff91-aa29-4d96-9da9-ee89af7b8ceb"
// payments: []
// statusAoD: null
// user: null
// userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
// {
//     "id": "6b49ff91-aa29-4d96-9da9-ee89af7b8ceb",
//     "userName": "Krishika Mirpuri",
//     "userEmail": "krish10@gmail.com",
//     "facilityName": "Mayor Hall",
//     "facilityDesc": null,
//     "eventDate": "04-12-2022",
//     "eventTime": "11:46",
//     "additionalInfo": "Thanks lots",
//     "payments": []
//   }
const renderResponse = (data) =>{
    let obj={}
    obj.date = data.eventDate
    obj.time = data.eventTime
    obj.hall = data.facilityId
    obj.info = data.additionalInfo
  

    return obj

}

const BookingForm = (props) => {
    const {id} = useParams()
    console.log({id})



    // const [bookingname, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [phonenumber, setPhone] = useState('');
    // const [date, setDate] = useState('');
    // const [time, setTime] = useState('');
    // const [hall, setHall] = useState('');
    // const [info, setInfo] = useState('');
    const [bookingInfo, setBookingInfo] = useState(initData);
    
    const handleChange = (eve) =>{
        setBookingInfo(prev =>({
            ...prev, [eve.target.name]:eve.target.value}))
    }
    // console.log({bookingInfo})

    // const changeName = (e) => {
    //     // console.log({e:e.target.value});
    //     setName (e.target.value);
    // }
    // const changeEmail = (e) => {
    //     setEmail (e.target.value);
    // }
    // const changePhone = (e) => {
    //     setPhone (e.target.value);
    // }
    // const changeDate = (e) => {
    //     setDate (e.target.value);
    // }
    // const changeTime = (e) => {
    //     setTime (e.target.value);
    // }
    // const changeHall = (e) => {
    //     setHall (e.target.value);
    // }
    // const changeInfo = (e) => {
    //     setInfo (e.target.value);}


    // function to save bookings
    // function to update booking
    /*
        if id is found perform an update
        if id is not found, create booking
    
    */
    const getBookingInfo = async()=>{
            try {
                const response = await axios.post(`/Booking/CreateBooking`,bookingInfo)
                console.log({response})
                setBookingInfo(renderResponse(response.data[0]))
            } catch (error) {
                console.error({response:error})
            }
    }

    const getFacilities = async() => {
        try{
            const result = await axios.get(`/Facility/GetFacilities`)
            console.log({result})
        }catch (error){

        }
    }

    const submitData = (e) =>{
        e.preventDefault()

        // result here....


        //let objData =bookingInfo
        
        // if(!bookingInfo.eventDate){
        //     alert("Please input a date for your meeting or event.")
        // } else if(!bookingInfo.eventTime){
        //     alert("Please input a time for your meeting or event.")
        // } else if(!bookingInfo.facilityName){
        //     alert("Please input a location for your meeting or event.")
        // } 

        console.log({bookingInfo})
          //bookingInfo?.bookingname ?   console.log({objData}):alert("just add your name")
           bookingInfo.date.length > 0 ?   console.log({bookingInfo}) : alert("Please Pick A Valid Date.")
           bookingInfo.time.length > 0 ?   console.log({bookingInfo}) : alert("Please Pick A Valid Time.")
           bookingInfo.hall.length > 0 ?   console.log({bookingInfo}) : alert("Please Pick A Facility.")

           getBookingInfo()
           
    }

    useEffect(()=>{
        getFacilities()
    },[])
    

    useEffect(() => {

        if(id){
            getBookingInfo()
        }
      
      return () => {
        
      }
    }, [id])
    


    return (
    <div>
        <Form>
        <FormGroup>
            <Label for="exampleDate">
                Event Date
            </Label>
            <Input
                id="exampleDate"
                name="date"
                placeholder="01-10-2022"
                type="date"
                value={bookingInfo.date}
                onChange={handleChange}
            />
        </FormGroup>
        <FormGroup>
            <Label for="exampleTime">
                Event Time
            </Label>
            <Input
                id="exampleTime"
                name="time"
                placeholder="10:20"
                type="time"
                value={bookingInfo.time}
                onChange={handleChange}
            />
        </FormGroup>
        <FormGroup>
            <Label for="exampleSelect">
                Select a Hall or Conference Room
            </Label>
            <Input
                id="exampleSelect"
                name="hall"
                type="select"
                value={bookingInfo.hall}
                onChange={handleChange}
            >
            <option>
                Choose a Hall from the List
            </option>
            <option>
                Mayor Hall
            </option>
            <option>
                VP Hall
            </option>
            <option>
                President Hall
            </option>
            <option>
                Bronze Conference Room
            </option>
            <option>
                Silver Conference Room
            </option>
            <option>
                Gold Conference Room
            </option>
            </Input>
        </FormGroup>
        <FormGroup>
            <Label for="exampleText">
                Anything Else?
            </Label>
            <Input
                style={{resize:"none", height:"120px"}}
                id="exampleText"
                name="info"
                type="textarea"
                value={bookingInfo.info}
                onChange={handleChange}
                />
        </FormGroup>
        <Button type='submit' style={styles.Button} onClick={submitData} >
            Submit
        </Button>
        </Form>
    </div>
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