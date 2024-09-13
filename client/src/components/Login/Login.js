import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector} from 'react-redux';
import './Login.css';
import { Container } from 'react-bootstrap';
import { LoginAction } from '../../Action/RegisterAction';

import Footerpage from '../Footer/Footerpage';
const Login = () => {
    const dispatch=useDispatch();
  const [email, setEmail]=useState("");
  const [password ,setPassword]=useState("");
          
    useEffect(()=>{
 if(localStorage.getItem('currentUser')){
    window.location.href='/'
 }


},[])
const LoginHandler=()=>{
    const user ={email,password}
    dispatch(LoginAction(user));
    console.log(user);
    setEmail(" ");
    setPassword(" ");
}
  return (
    <>
    <div className='login-main-container'> 
    <div className='Login_container'>
     <Form>
      <h2>Login</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='title'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={email} onChange={e=>setEmail(e.target.value)} className='form_input'/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='title'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"value={password} onChange={e=>setPassword(e.target.value)} className='form_input'/>
      </Form.Group>
      <Button variant="primary" onClick={LoginHandler} className='login-button'>
        login
      </Button>
      <span><h4>Don't have an account yet?Sign Up</h4><a href='/register'>sign up</a></span>
    </Form>  
    </div>
    <Footerpage/>
    </div>
    </>
  )
}

export default Login
