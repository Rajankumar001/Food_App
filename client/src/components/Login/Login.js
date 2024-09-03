import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux';
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
    <Container>
     <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={email} onChange={e=>setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"value={password} onChange={e=>setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" onClick={LoginHandler}>
        login
      </Button>
    </Form>  
    </Container>
    <Footerpage/>
    </>
  )
}

export default Login
