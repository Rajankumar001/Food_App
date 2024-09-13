import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch,useSelector} from 'react-redux';
import {OrderAction} from '../Action/OrderAction';
import Footerpage from '../components/Footer/Footerpage';
import '../Screens/CartScreen.css';
const Checkout = ({subTotal}) => {
  const placingorderState=useSelector(state=>state.AllOrderReducer)
  const {loading,success,error}=placingorderState;
  
  const dispatch=useDispatch()
 const tokenHandler=(token)=>{
  console.log('Checkout - Token:', token," is not fetching");
      dispatch(OrderAction(token,subTotal));
       console.log(token)
    }
    const payNowhandler=()=>{
      if(!localStorage.getItem('currentUser')){
        window.location.href='/login'
      }
    }
  return (
    <>
   
    <StripeCheckout
    amount={subTotal*100} // cents
    shippingAddress
    currency="INR"
    token={tokenHandler}
    stripeKey="pk_test_51Pawu4RtvSyFI9hfUMSPLtMU7LOzHVNVAzP5NsnEvscfkU9EnWJ6z5oLfCgXjfEjup8n660QNI1G772N0VQ9JD6m00Z5CSTffw"
    >
<button className="checkout" onClick={payNowhandler}>
    pay now
  </button>
</StripeCheckout>

    </>
  )
}

export default Checkout
