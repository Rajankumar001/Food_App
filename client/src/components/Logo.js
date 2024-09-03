import React from 'react'
import {Nav,Navbar,Container,NavDropdown, NavbarBrand} from 'react-bootstrap';
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
    <div style={{display:'flex',flexDirection:'column'}}>
      <Navbar collapseOnSelect expand="lg" bg='light' variant='light' className='nav-bar-logo'>
      <Container>
        <Navbar.Brand  className='logo-img'><img  src='https://img.cdn4dd.com/p/fit=contain,width=100,height=100,format=auto,quality=95/media/restaurant/cover_square/e3f608fd-3dd5-4b09-a587-dd22be62829e.png'></img></Navbar.Brand>
        <Navbar.Brand href="#home" className='logo-title'>Hungry  crowd</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {currentUser ?( <><LinkContainer to='/'>
              <NavDropdown
              id="nav-dropdown-dark-example"
              title={currentUser.currentUser.name}
              menuVariant="dark"
            ><LinkContainer to='/order'>
            <Nav.Link className='Navigation'>Order</Nav.Link>
            </LinkContainer>
              <NavDropdown.Item href="#action/3.3" onClick={()=>{dispatch(logoutUser())}} >Logout</NavDropdown.Item>
            </NavDropdown>
            </LinkContainer></>):(<>
              <LinkContainer to='/login'>
            <Nav.Link  className='Navigation'>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/register'>
            <Nav.Link className='Navigation'>Rgister</Nav.Link>
            </LinkContainer>
            
            </>)}
           
            <LinkContainer to ='/cart'>

            <Nav.Link className='Navigation' >Cart {Food.length}</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  )
}

export default Logo
