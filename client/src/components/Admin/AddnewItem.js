import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { addFood } from '../../Action/Action';
import { useDispatch } from 'react-redux';
const AddnewItem = () => {
  const dispatch=useDispatch();
  const [name,setName]=useState('');
  const [small,setSmall]=useState();
  const [medium,setMedium]=useState();
  const [large,setLarge]=useState();
  const [image,setImagee]=useState('');
  const [description,setdescription]=useState('');
  const [category,setCategory]=useState('');
 const submitForm=(e)=>{
  e.preventDefault();
  const foods={
    name,
    image,
    description,
    category,
    prices:{
      small,
      medium,
      large
    }
  }
  dispatch(addFood(foods));
 }


  return (
    <>
   <Form onSubmit={submitForm}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name"
                   value={name}
                   onChange={(e)=>setName(e.target.value)}
                   />
        </Form.Group>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>0.5kg||half</Form.Label>
          <Form.Control         value={small}
        onChange={(e)=>setSmall(e.target.value)}
        />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>1kg</Form.Label>
          <Form.Control 
                  value={medium}
                  onChange={(e)=>setMedium(e.target.value)}
                  />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>2kg||full</Form.Label>
          <Form.Control 
                  value={large}
                  onChange={(e)=>setLarge(e.target.value)}
                  />
        </Form.Group>
      </Row>


        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" placeholder="image url" 
                  value={image}
                  onChange={(e)=>setImagee(e.target.value)}
                  />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Description</Form.Label>
        <Form.Control placeholder="Description" 
                value={description}
                onChange={(e)=>setdescription(e.target.value)}
                />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>category</Form.Label>
        <Form.Control placeholder="category" 
        value={category}
        onChange={(e)=>setCategory(e.target.value)}
        
        />
      </Form.Group>

      <Button variant="primary" type="submit">
       Add new
      </Button>
    </Form>
 
    </>
  )
}

export default AddnewItem
