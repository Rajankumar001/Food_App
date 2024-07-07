import React from 'react'
 import { Container,Row,Col,Button } from 'react-bootstrap';
 import { useDispatch, useSelector} from 'react-redux';
import './CartScreen.css';
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import {deleteFromCart} from '../Action/AddtoCart'
const CartScreen = () => {
const dispatch=useDispatch()
const Cart=useSelector((state)=>state.CartReducer);
 const {Food}=Cart;
 const subTotal=Food.reduce((x,Item)=>x+Item.price,0)
return (
    <>
      <Container>
        <Row>
            <Col md={7}>
           <Row>
            <h2>My Cart</h2>
            <Col md={7}>
             {
          
               Food.map((Item)=>(
                <div>
                <div className='CartScreen'>
                <h3 className='Id_text'>
                    {Item._id}
                </h3>
                <h2  className='Food_Item_name'>
                    {Item.name}
                </h2>
                <h5 >
                   quantity:
                   <CiCircleMinus />
                   &nbsp;{Item.quantity}&nbsp;
                    <CiCirclePlus />
                    
                </h5>
                <h5 >
                {Item.prices && Item.prices[0] && Item.variants && (
                    <h5>Price: {Item.quantity} X {Item.prices[0][Item.variants]} = {Item.price}</h5>
                  )}
                </h5>
           
                </div>
                </div>
                
               ))
             }

            </Col>
            <Col md={5}>
            {
             Food.map((Item)=>(
                    <div>
     <img src={Item.image} alt={Item.name} style={{width:"150px",height:"155px",marginTop:"10px",paddingBottom:"5px"}}>
    </img>
    <MdDelete style={{cursor:"pointer",fontSize:"25px",color:"red",marginLeft:"20px"}} onClick={()=>{
      dispatch(deleteFromCart(Item))
    }}/>
                    </div>
    
                ))
            }
             
            </Col>
           </Row>
            </Col>
            <Col md={5}>
            <h2>Payment Info</h2>
            <h3>SubTotal</h3>
              <h4>Rs{subTotal}/-</h4>
              <Button>Checkout</Button>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default CartScreen;