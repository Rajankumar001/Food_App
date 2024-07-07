import React from 'react'
import './Topbar.css';
import {Navbar,Nav,Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { MdLocalOffer } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
const Topbar = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg' className='topbar'>
       <Container fluid>
        <h6 className='text-color'>
        <MdLocalOffer className='icon-color'/>&nbsp;
        Free Home Delivery on  Order Above 250/-
        </h6>
        <Nav className='ms-auto'>
            <LinkContainer to='/'>
            <Nav.Link>
                Home
            </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about'>
            <Nav.Link>
                About Us
            </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'>
            <Nav.Link>
                Contact Us
            </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/policy'>
            <Nav.Link>
                Terms and Policy
            </Nav.Link>
            </LinkContainer>
        </Nav>

       </Container>
      </Navbar>
    </>
  )
}

export default Topbar
