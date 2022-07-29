import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Book from './pages/Book';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Bookings from './pages/Bookings';
import {Route, Routes} from "react-router-dom";
import Profile from './pages/Profile';
import { useEffect } from 'react';
// import SignUp from './pages/SignUp';
// import LogIn from './pages/LogIn';

function App() {
  useEffect(() => {
    console.log(process.env.NODE_ENV)
    console.log(process.env.REACT_APP_OIDC_USER)
    console.log('Auth:', process.env.REACT_APP_AUTHORITY)
  })
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/book' element={<Book/>}/>
          <Route path='/book/:id' element={<Book/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/bookings' element={<Bookings/>}/>
          
          <Route path='/profile' element={<Profile/>}/>
          {/* <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/logIn' element={<LogIn/>}/> */}
          <Route path='*' element={<Error/>}/>
        </Routes>
        {/* <Home/> */}
        
      </Layout>
    </>
  );
}

export default App;
