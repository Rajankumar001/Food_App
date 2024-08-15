import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Alluserorder } from '../../Action/OrderAction';
import Table from 'react-bootstrap/Table';
const Orderlist = () => {
  const dispatch=useDispatch();
  const alluserorderstate=useSelector((state)=>state.AlluserorderReducer);
  const {orders}=alluserorderstate;
  useEffect(()=>{
    dispatch(Alluserorder());
  },[dispatch]);
  return (
    <>
      <h1>
       {orders && orders.map(order=>(
        <>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Item name</th>
          <th>Item amount</th>
          <th>Address</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{order.orderItem[0].name}</td>
          <td>{order.orderAmount}</td>
          <td>{order.shippingAddress.city}</td>
          <td>{order.email}</td>
        </tr>
      </tbody>
    </Table>
        </>
       ))}
      </h1>
    </>
  )
}

export default Orderlist
