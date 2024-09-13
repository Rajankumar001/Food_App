import React, { useState } from 'react'
import { Button,Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch} from 'react-redux';
import { RegisterAction } from '../../Action/RegisterAction';
import '../Login/Login.css';
import Footerpage from '../Footer/Footerpage';
const UserRegister = () => {
  const dispatch=useDispatch();
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [Cpassword,setCPassword]=useState("");
const [address,setAddress]=useState("");
 const Registerhandle=()=>{
  const user={name,email,password,address};
  dispatch(RegisterAction(user))
  toast("user registered successfully !");
  console.log(user);
  setName(" ");
  setEmail(" ");
  setPassword(" ");
  setCPassword(" ");
  setAddress(" ");
 }
  return (
    <>
<div className='login-main-container'> 
<div className='signup_container'>
    <Form>
      <h2>Sign Up</h2>
      <ToastContainer/>
    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label className='title'>Name</Form.Label>
        <Form.Control type="text"  value={name} placeholder="Name" onChange={e=>setName(e.target.value)}  className='form_input'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='title'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"value={email} onChange={e=>setEmail(e.target.value)} className='form_input'/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='title'>Address</Form.Label>
        <Form.Control as="textarea" rows={3}  value={address} onChange={e=>setAddress(e.target.value)} placeholder='Enter your Address...' className='form_input'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='title'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"value={password} onChange={e=>setPassword(e.target.value)} className='form_input'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCpassword">
        <Form.Label className='title'>Cpassword</Form.Label>
        <Form.Control type="password" placeholder="Cpassword" value={Cpassword} onChange={e=>setCPassword(e.target.value)} className='form_input'/>
      </Form.Group>
      <Button variant="primary" onClick={Registerhandle} className='login-button'>
        Sign Up
      </Button>
      <span><h4>Already have account ? login</h4><a href='/login'>Login</a></span>
    </Form>
</div>
<Footerpage/>
</div>
    </>
  )
}

export default UserRegister
