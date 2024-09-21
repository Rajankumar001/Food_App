import React from 'react'
import './Topbar.css';
import {Navbar,Nav,Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { MdLocalOffer } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
const Topbar = () => {
  return (
    <>
      <Navbar  expand='lg' className='topbar'>
       <Container fluid>
        <h6 className='text-color'>
        <MdLocalOffer className='icon-color'/>&nbsp;
        Free Home Delivery on  Order Above 250/-
        </h6>
        <Nav className='ms-auto nav-links'>
          <div className='nav-container'>
            <LinkContainer to='/'>
            <Nav.Link className='nav-item'>
                Home
            </Nav.Link>
            </LinkContainer >
            <LinkContainer to='/about' >
            <Nav.Link className='nav-item'>
                About Us
            </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact' >
            <Nav.Link className='nav-item'>
                Contact Us
            </Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to='/policy' >
            <Nav.Link className='nav-item'>
                Terms and Policy
            </Nav.Link>
            </LinkContainer> */}
            </div>
        </Nav>

       </Container>
      </Navbar>
    </>
  )
}

export default Topbar
