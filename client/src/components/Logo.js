import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from 'react-redux';
import './Logo.css';
const Logo = () => {
  
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
            <LinkContainer to='/login'>
            <Nav.Link >Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/register'>
            <Nav.Link >Rgister</Nav.Link>
            </LinkContainer>
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
