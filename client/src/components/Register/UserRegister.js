import React, { useState } from 'react'
import { Button,Container,Form } from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import { RegisterAction } from '../../Action/RegisterAction';
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
  console.log(user);
  setName(" ");
  setEmail(" ");
  setPassword(" ");
  setCPassword(" ");
  setAddress(" ");
 }
  return (
    <>
<Container>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"  value={name} placeholder="Name" onChange={e=>setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"value={email} onChange={e=>setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Address</Form.Label>
        <Form.Control as="textarea" rows={3}  value={address} onChange={e=>setAddress(e.target.value)} placeholder='Enter your Address...'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"value={password} onChange={e=>setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCpassword">
        <Form.Label>Cpassword</Form.Label>
        <Form.Control type="password" placeholder="Cpassword" value={Cpassword} onChange={e=>setCPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" onClick={Registerhandle}>
        Register
      </Button>
    </Form>
</Container>
    </>
  )
}

export default UserRegister
