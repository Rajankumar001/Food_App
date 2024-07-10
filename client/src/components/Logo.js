import React from 'react'
import {Nav,Navbar,Container,NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import { logoutUser } from '../Action/RegisterAction';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Logo.css';
const Logo = () => {
  const dispatch =useDispatch();
  const userState=useSelector((state)=>state.LoginReducer);
  console.log("userstate",userState);
  const {currentUser}=userState;
  console.log(currentUser);
  const cartState=useSelector((state)=>state.CartReducer);
  console.log(cartState);
  const {Food}=cartState
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg='light' variant='light'>
      <Container>
        <Navbar.Brand href="#home">Hungry  crowd</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {currentUser ?( <><LinkContainer to='/'>
              <NavDropdown
              id="nav-dropdown-dark-example"
              title={currentUser.currentUser.name}
              menuVariant="dark"
            ><NavDropdown.Item href="#action/3.1">Order</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" onClick={()=>{dispatch(logoutUser())}} >Logout</NavDropdown.Item>
            </NavDropdown>
            </LinkContainer></>):(<>
              <LinkContainer to='/login'>
            <Nav.Link >Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/register'>
            <Nav.Link >Rgister</Nav.Link>
            </LinkContainer>
            
            </>)}
           
            <LinkContainer to ='/cart'>

            <Nav.Link >Cart {Food.length}</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Logo
