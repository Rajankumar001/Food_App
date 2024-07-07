import React, { useState } from 'react'
import './Home.css';
import {Card,Row,Button,Col} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {AddtoCart}  from "../../Action/AddtoCart";
const Home = ({sweets}) => {
const dispatch=useDispatch()
const [variants,setvariant]=useState("0.5kg")
const [quantity,setquantity]=useState(1);
const addTocartHandler=()=>{
dispatch(AddtoCart(sweets,variants,quantity))  
}
  return (
<>
{sweets && (
 <Card style={{ width: '30rem',marginBottom:'20px' }}>
 <Card.Img variant="top" src={sweets.image} style={{height:'198.15px',cursor:"pointer"}} />
 <Card.Body>
   <Card.Title>{sweets.name}</Card.Title>
   <hr/>
   <Card.Text>
    <Row>
    <Col md={6}>
    <h5>
      Varient
    </h5>
    <select value={variants} onChange={e=>setvariant(e.target.value)}>
      {
        sweets.variants.map(varient=>(
          <option >
               {varient}
          </option>
            ))
      }
    </select>
    </Col>
    <Col md={6}>
    <h5>
      quantity
    </h5>
    <select  value={quantity} onChange={e=>setquantity(e.target.value)}>
      {
        [...Array(6).keys()].map((v,i)=>(
          <option value={i+1}>
               {i+1}
          </option>
            ))
      }
    </select>
    </Col>
    
      </Row>
   </Card.Text>
  <Row>
    <Col md={6}>
    prices:{
      sweets.prices[0][variants]*quantity
    }
    </Col>
    <Col md={6}>
    <Button className='bg-warning text-white'

    onClick={addTocartHandler}
    > Add to cart</Button>
    </Col>
  </Row>
 </Card.Body>
</Card>
      )}
</>
  )
}
export default Home;
