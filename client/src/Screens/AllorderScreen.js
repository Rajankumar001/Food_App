import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Allorder } from '../Action/OrderAction';
import Loader from '../components/Loader';
import { Row, Col } from 'react-bootstrap';

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
      <h1>All Orders</h1>
      {loading && <Loader />}
      {error && <div>{error}</div>}
      {orders && orders.map(order => (
        <Row >
          <Col md={4}>
            {order.orderItem && order.orderItem.map(item => (
              <div>
                <h1>{item.name} &nbsp;&nbsp;&nbsp;{item.variants}*{item.quantity}={item.price}</h1>
              </div>
            ))}
          </Col>
        </Row>
      ))}
    </>
  );
}

export default AllorderScreen;
