import React from 'react'
 import {Container,Row,ListGroup} from 'react-bootstrap';
 import './About.css';
import Footerpage from '../Footer/Footerpage';
const About = () => {
  return (
    <>
      <Container style={{marginTop:'15px',background:'#F0E68C',marginBottom:'20px', borderRadius:'15px', padding:'20px'}}>
       <Row className='first_About_class'>
        <h2 className='About_section'>About Us</h2>
        <h4 className='About_heading'>
        Welcome to Hungry Crowd!
        </h4>
        <p className='About_content'>
        At Hungry Crowd, we bring you the finest selection of sweets and snacks, crafted with love and tradition. Our mission is to satisfy your cravings with delicious, high-quality treats that remind you of home.
        </p>
       </Row>
       <Row className='second_About_class'>
        <h4 className='About_heading'>
        Our Offerings:
        </h4>
        <ListGroup as="ul" >
      <ListGroup.Item as="li" style={{background:'#F4CE14'}}className='About_content'>
      Sweets and Snacks: Indulge in our wide variety of sweets and snacks, perfect for any occasion. From traditional Indian mithai to savory snacks, we have something to please every palate.
      </ListGroup.Item>
      <ListGroup.Item as="li"style={{background:'#F4CE14'}}className='About_content'>
      Sweets and Snacks: Indulge in our wide variety of sweets and snacks, perfect for any occasion. From traditional Indian mithai to savory snacks, we have something to please every palate.
      </ListGroup.Item>
      <ListGroup.Item as="li"style={{background:'#F4CE14'}} className='About_content'>
      Catering Services: Planning a wedding, mundan, upnayan, or any special event? Our professional halwais are here to make your celebration memorable. Book our catering service for authentic, mouth-watering dishes prepared on-site to your specifications.
      </ListGroup.Item>
      
    </ListGroup>
       </Row>
       <Row>
        <h4 className='About_heading'>Our story</h4>
        <p className='About_content'>
        Hungry Crowd was founded with the vision of bringing traditional flavors to the modern world. Our team of passionate food enthusiasts is dedicated to preserving the rich culinary heritage of India while meeting contemporary tastes and preferences.
        </p>
        <p className='About_content'>
        We believe that food is not just about nourishment but also about bringing people together and creating joyful memories. That's why we take pride in using only the finest ingredients and time-honored recipes to create our products.
        </p>
       </Row>
       <Row>
        <h4 className='About_heading'>
            Why choose Us?
       
        </h4>
        <ListGroup as="ul">
      <ListGroup.Item as="li"style={{background:'#F4CE14'}} className='About_content'>
      Quality: We are committed to using the highest quality ingredients in all our products
      </ListGroup.Item>
      <ListGroup.Item as="li"style={{background:'#F4CE14'}}className='About_content'>
      Convenience: With easy online ordering and reliable delivery, satisfying your cravings has never been simpler.
      </ListGroup.Item>
      <ListGroup.Item as="li" style={{background:'#F4CE14'}}className='About_content'>
      Customer Service: Our friendly and professional team is here to ensure you have the best experience with Hungry Crowd.
      </ListGroup.Item>
    </ListGroup>
       </Row>
      </Container>
      <Footerpage/>
    </>
  )
}

export default About
