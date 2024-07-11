import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
const Checkout = ({subTotal}) => {
    const tokenHandler=(token)=>{
       console.log(token)
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
<button className="btn btn-primary">
    pay now
  </button>
</StripeCheckout>
    </>
  )
}

export default Checkout
