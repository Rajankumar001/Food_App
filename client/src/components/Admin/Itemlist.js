import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Container,Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import {getAllFood,deletedfood} from '../../Action/Action.js';
import Loader from '../Loader.js';
const Itemlist = () => {
  let i=1;
  const dispatch=useDispatch();
  const foodstate=useSelector((state)=>state.getFoodReducers);
  const {loading,Food,err} =foodstate;
  console.log(foodstate);
  useEffect(()=>{
    dispatch(getAllFood())
  },[dispatch]);
  return (
    <>
      <Container>
      {
        loading?(
        <Loader/>
        ):
        err ?(
          <h1>error is fetching...</h1>
        ):(
          <div>
              <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Items Name</th>
          <th>Price</th>
          <th>Variants</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
        Food && Food.map((item)=>(
          <>
          <tr>
           <td>{i++}</td>
           <td>{item.name}</td>
           <td>half||1kg:{item.prices[0]['half'] ||item.prices[0]['1kg']||item.prices[0]['6piece']}
           <br/>
           full||2kg:{item.prices[0]['full'] || item.prices[0]['2kg']||item.prices[0]['12piece']}
           </td>
           <td>{item.variants}</td>
           <td> 
            <Link to={`/admin/editItem/${item._id}`}>
            <MdEdit/>
            </Link>
            
          &nbsp;<AiFillDelete color='red' onClick={()=>{dispatch(deletedfood(item._id))}}/></td>
          </tr>
          </>
        ))
       }
      
      </tbody>
    </Table>
          </div>
        )
      }

    </Container>
    </>
  )
}

export default Itemlist
