import React from 'react'
 import { Container,Row,Col,Button } from 'react-bootstrap';
 import { useDispatch, useSelector} from 'react-redux';
import './CartScreen.css';
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { ImCross } from "react-icons/im";
import {deleteFromCart} from '../Action/AddtoCart'
import Checkout from '../components/Checkout';
const CartScreen = () => {
const dispatch=useDispatch()
const Cart=useSelector((state)=>state.CartReducer);
 const {Food}=Cart;
 const subTotal=Food.reduce((x,Item)=>x+Item.price,0)
return (
    <>
      
        <div className='cart-container'>
            <div>
           <div className='cart-reciept'>
            <div  className='cart-left-reciept' >
             {
          
               Food.map((Item)=>(
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
                
                
               ))
             }

            </div>
            <div md={6} className='cart-right-reciept'>
            {
             Food.map((Item)=>(
                    <div>
     <img src={Item.image} alt={Item.name} >
    </img>
    <ImCross  onClick={()=>{
      dispatch(deleteFromCart(Item))
    }} className='cancel-button'/>
                    </div>
    
                ))
            }
             
            </div>
           </div>
            </div >
            <div  className='payment-box'>
            <h2 className='payment-title'> Payment Info</h2>
            <br></br>
            <h3>SubTotal</h3>
              <h4>Rs{subTotal}/-</h4>
             <Checkout subTotal={subTotal}/>
            </div>
        </div>
    
    </>
  )
}

export default CartScreen;