import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Allorder } from '../Action/OrderAction';
import Loader from '../components/Loader';
import { Row, Col, Container } from 'react-bootstrap';

const AllorderScreen = () => {
  const orderState = useSelector(state => state.AllOrderReducer);
  const { loading, error, orders } = orderState;
  console.log("orderState->data",orderState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Allorder());
  }, [dispatch]);

  return (
    <>
      
      {loading && <Loader />}
      {error && <div>{error}</div>}
      {orders && orders.map(order => (
        <Container className='border p-4 bg-light'>
          <h1>Your Orders</h1>
        <Row >
          <Col md={4}>
            {order.orderItem && order.orderItem.map(item => (
              <div >
                <h5>{item.name} &nbsp;&nbsp;[{item.variants}]*{item.quantity}={item.price}</h5>
              </div>
            ))}
          </Col>
          <Col md={4}>
          <h2>Address:</h2>
          <h4>{order.shippingAddress.payment_holder_name}</h4>
          <h4>{order.shippingAddress.street}</h4>
          <h4>{order.shippingAddress.city}</h4>
          <h4>{order.shippingAddress.country}</h4>
          <h4>{order.shippingAddress.pincode}</h4>
         
          </Col>
          <Col md={4}>

           <h2>Order Info</h2>
           <h4>Order Amount:{order.orderAmount}</h4>
          </Col>
        </Row>
        </Container>
      ))}
    </>
  );
}

export default AllorderScreen;
